import express from "express";
const app = express();
import cors from "cors";
app.use(cors())
import userRouter from "./routers/userRouter.js";
import ticketRouter from "./routers/tickerRouter.js";
import db from "./config/database.js";
import dotenv from "dotenv-safe";

dotenv.config();

app.use(express.json())

db.on("open", () => console.log("Conexão com o banco realizada com sucesso."));
db.on("error", () => console.log("Erro na conexão com o banco!"));

app.use("/crm-tera", userRouter)
app.use("/crm-tera/ticket", ticketRouter)






export default app;