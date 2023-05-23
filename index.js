const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

let port = 8080;

app.listen(port, () => {
  console.log(`Aplicacao rodando na porta ${port}`);
});
