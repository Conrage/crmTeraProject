import express from 'express';
import userRouter from './routers/userRouter.js';
import ticketRouter from './routers/ticketRouter.js';
import db from './config/database.js';
import dotenv from 'dotenv-safe';
import cors from 'cors';

const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', "http://localhost:3000");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    app.use(cors())
    next();
})

dotenv.config();

app.use(express.json());

db.on('open', () => console.log('Conexão com o banco realizada com sucesso.'));
db.on('error', () => console.log('Erro na conexão com o banco!'));

app.use('/crm-tera', userRouter);
app.use('/crm-tera/ticket', ticketRouter);

export default app;
