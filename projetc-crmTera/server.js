import app from "./src/app.js";


const PORT = 4000;

app.listen(PORT, () => {
    console.log(`Servidor iniciado com sucesso, rodando na porta ${PORT}.`)
});