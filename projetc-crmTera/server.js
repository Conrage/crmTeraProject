import app from "./src/app.js";

app.get("/", (req, res) => {
    res.json({"users": ["user 1", "user 2", "user 3"]})
})


const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Servidor iniciado com sucesso, rodando na porta ${port}.`)
});