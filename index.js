const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/perguntar", (req, res) => {
  res.render("perguntar");
});

app.get("/:nome?/:lang?", (req, res) => {
  var nome = req.params.nome;
  var language = req.params.lang;
  var exibirmsg = true;
  var produtos = [
    { nome: "Doritos", preco: 9.19 },
    { nome: "Pepsi", preco: 4.59 },
    { nome: "Whey Protein", preco: 59.0 },
  ];
  res.render("index", {
    nome: nome,
    lang: language,
    empresa: "Seven",
    inscritos: 8000,
    msg: exibirmsg,
    produtos: produtos,
  });
});

let port = 8080;

app.listen(port, () => {
  console.log(`Aplicacao rodando na porta ${port}`);
});
