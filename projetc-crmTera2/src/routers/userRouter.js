import express from "express";
const router = express.Router()
import userController from "../controllers/userController.js"




router.get("/", userController.home);
router.post("/registrer/", userController.userRegistrer);
router.post("/login", userController.authentication);

export default router;