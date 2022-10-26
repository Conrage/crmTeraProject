import axios from "axios";
import { useState } from "react";
import "../styles/login.css";
import AlertSuccess from "../components/AlertSuccess";
import AlertError from "../components/AlertError";
import { useNavigate } from "react-router-dom";

function Login() {
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [modal, setModal] = useState({});
  const navigate = useNavigate();

  const login = async () => {
    navigate("/dashboard", { replace: true });

    try {
      const res = await axios.post(
        "https://teracrm.herokuapp.com/crm-tera/login",
        {
          email,
          password,
        }
      );
      setModal({
        code: "success",
        message: "Logado com sucesso!",
      });
      navigate("/dashboard", { replace: true });
    } catch (error) {
      setModal({
        code: "error",
        message: "Falha ao entrar.",
      });
      console.error(error);
    }
  };

  const register = async () => {
    try {
      const res = await axios.post(
        "https://teracrm.herokuapp.com/crm-tera/registrer",
        {
          email,
          password,
          name: username,
          cpf: "",
          birth: "",
          tel: "",
        }
      );

      setModal({
        code: "success",
        message: "Registrado com sucesso!",
      });
      setIsRegister(false);

    } catch (error) {
      setModal({
        code: "error",
        message: "Falha no registro.",
      });
      console.error(error);
    }
  };

  return (
    <html data-theme="corporate">
      <div className="bg-login w-full h-screen flex items-center justify-center flex-col relative">
        {modal.code === "success" ? (
          <AlertSuccess message={modal.message}></AlertSuccess>
        ) : (
          ""
        )}
        {modal.code === "error" ? (
          <AlertError message={modal.message}></AlertError>
        ) : (
          ""
        )}
        {!isRegister ? (
          <div className="p-4 bg-white shadow-lg flex flex-col gap-2 rounded-sm">
            <div className="w-full max-w-xs">
              <label className="label mb-0">
                <span className="label-text">E-mail</span>
              </label>
              <input
                type="text"
                placeholder="example@email.com"
                onChange={(e) => setEmail(e.target.value)}
                className="input input-bordered !outline-blue-600 focus:!border-blue-600 border w-full max-w-xs placeholder:text-sm text-sm"
              />
            </div>
            <div className="w-full max-w-xs">
              <label className="label mb-0">
                <span className="label-text">Senha</span>
              </label>
              <input
                type="text"
                placeholder="Senha"
                onChange={(e) => setPassword(e.target.value)}
                className="input input-bordered !outline-blue-600 focus:!border-blue-600 border w-full max-w-xs placeholder:text-sm text-sm"
              />
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setIsRegister(true)}
                className="btn btn-outline btn-primary mt-4"
              >
                CRIAR CONTA
              </button>
              <button
                onClick={() => login()}
                className="btn btn-primary mt-4 w-40"
              >
                FAZER LOGIN
              </button>
            </div>
          </div>
        ) : (
          <div className="p-4 bg-white shadow-sm flex flex-col gap-2  rounded-sm">
            <div className="w-full max-w-xs">
              <label className="label mb-0">
                <span className="label-text">Nome de usuário</span>
              </label>
              <input
                type="text"
                placeholder="Usuário"
                onChange={(e) => setUsername(e.target.value)}
                className="input input-bordered !outline-blue-600 focus:!border-blue-600 border w-full max-w-xs placeholder:text-sm text-sm"
              />
            </div>
            <div className="w-full max-w-xs">
              <label className="label mb-0">
                <span className="label-text">E-mail</span>
              </label>
              <input
                type="text"
                placeholder="example@email.com"
                onChange={(e) => setEmail(e.target.value)}
                className="input input-bordered !outline-blue-600 focus:!border-blue-600 border w-full max-w-xs placeholder:text-sm text-sm"
              />
            </div>
            <div className="w-full max-w-xs">
              <label className="label mb-0">
                <span className="label-text">Senha</span>
              </label>
              <input
                type="text"
                placeholder="Senha"
                onChange={(e) => setPassword(e.target.value)}
                className="input input-bordered !outline-indigo-600 focus:!border-indigo-600 border w-full max-w-xs placeholder:text-sm text-sm"
              />
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setIsRegister(false)}
                className="btn btn-outline btn-primary mt-4"
              >
                FAZER LOGIN
              </button>
              <button
                onClick={() => register()}
                className="btn btn-primary w-40 mt-4"
              >
                CRIAR CONTA
              </button>
            </div>
          </div>
        )}
      </div>
    </html>
  );
}

export default Login;
