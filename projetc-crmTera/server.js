import app from "./src/app.js";

app.get("/api", (req, res) => {
    res.json({"users": ["user 1", "user 2", "user 3"]})
})


const PORT = 4000;

app.listen(PORT, () => {
    console.log(`Servidor iniciado com sucesso, rodando na porta ${PORT}.`)
});