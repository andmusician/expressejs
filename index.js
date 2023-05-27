const express = require("express");
const parser = require("body-parser");
const bodyParser = require("body-parser");
const perguntaRepository = require("./repositories/perguntas.repository");
const respostaRepository = require("./repositories/respostas.repository");

const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  const perguntas = perguntaRepository.read().then((prg) => {
    res.render("home", { pergunta: prg });
  });
});

app.get("/perguntar", (req, res) => {
  res.render("perguntar");
});

app.get("/pergunta/:id", (req, res) => {
  var id = req.params.id;
  const perguntaById = perguntaRepository
    .findById(id)
    .then((prg) => {
      res.render("pergunta", { pergunta: prg });
    })
    .catch((error) => {
      res.render("error", { error: error });
    });
});

app.post("/salvarpergunta", (req, res) => {
  var titulo = req.body.titulo;
  var descricao = req.body.descricao;
  const salvarPergunta = perguntaRepository
    .create({
      titulo: `${titulo}`,
      descricao: `${descricao}`,
    })
    .then((resp) => {
      // console.log(JSON.stringify(resp));
    });

  res.redirect("/");
});

app.post("/salvarresposta", (req, res) => {
  var corpo = req.body.corpo;
  var perguntaid = req.body.perguntaid;
  const salvarResposta = respostaRepository
    .create({
      corpo: `${corpo}`,
      perguntaId: `${perguntaid}`,
    })
    .then((resp) => {
      // console.log(JSON.stringify(resp));
    });
  res.redirect(`/pergunta/${perguntaid}`);
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
