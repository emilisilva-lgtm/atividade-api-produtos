const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const produtos = [
    {
        nome: "Fone de Ouvido Bluetooth",
        preco: 120,
        categoria: "Eletrônicos",
        imagem: "https://m.media-amazon.com/images/I/517QlxmjUJL._AC_.jpg"
    },
    {
        nome: "Mouse Gamer",
        preco: 150,
        categoria: "Periféricos",
        imagem: "https://m.media-amazon.com/images/I/718b9wK3eaL._AC_.jpg"
    },
    {
        nome: "Teclado Mecânico",
        preco: 250,
        categoria: "Periféricos",
        imagem: "https://tse1.mm.bing.net/th/id/OIP.kj9pmILyQO03ZNq0C7J7WQHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
    }
];

app.get("/", (req, res) => {
    res.json(produtos);
});

app.listen(3000, "0.0.0.0", () => {
    console.log("Servidor rodando na porta 3000");
});