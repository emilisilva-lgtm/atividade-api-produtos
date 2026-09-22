const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const produtos = [
    {
        nome: "Fone de Ouvido Bluetooth",
        preco: 120,
        categoria: "Eletrônicos"
    },
    {
        nome: "Mouse Gamer",
        preco: 150,
        categoria: "Periféricos"
    },
    {
        nome: "Teclado Mecânico",
        preco: 250,
        categoria: "Periféricos"
    }
];

app.get("/", (req, res) => {
    res.json(produtos);
});

app.listen(3000, "0.0.0.0", () => {
    console.log("Servidor rodando na porta 3000");
});