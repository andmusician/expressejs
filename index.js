const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/:nome?/:lang?", (req, res) => {
  var nome = req.params.nome;
  var language = req.params.lang;
  res.render("index", {
    nome: nome,
    lang: language,
    empresa: "Seven",
    inscritos: 8000,
  });
});

let port = 8080;

app.listen(port, () => {
  console.log(`Aplicacao rodando na porta ${port}`);
});
