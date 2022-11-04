import express from "express";
import User from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

function gerarToken(param) {
  return jwt.sign(param, process.env.API_SECRET, {
    expiresIn: 1200,
  });
}

function verifyToken(req, res) {
  try {
    var decoded = jwt.verify(req.body.token, process.env.API_SECRET);
    res.status(200).send({message: "Token válido!",})
  } catch (err) {
    return res.status(400).send({ error: "Token inválido" });
  }
}

const home = (req, res) => {
  res.status(200).send({ mensagem: "Bem vindo!" });
};

const userRegistrer = async (req, res) => {
  const { name, birth, cpf, tel, email, password } = req.body;

  const possibleUser = await User.findOne({ email });
  if (possibleUser)
    return res.status(400).send({ error: "Email já cadastrado" });

  const newUser = await User.create({ name, birth, cpf, tel, email, password });
  return res
    .status(201)
    .send({ message: "Usuário cadastrado com sucesso.", newUser });
};

const authentication = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email }).select("+password");

  if (!user) return res.status(400).send({ error: "Usuário não encontrado" });

  const passwordOK = await bcrypt.compare(password, user.password);
  if (!passwordOK) return res.status(400).send({ error: "Senha inválida" });

  return res.status(200).send({
    message: "Login aceito.",
    user,
    token: gerarToken({ id: user.id }),
  });
};

export default {
  home,
  userRegistrer,
  authentication,
  verifyToken
};
