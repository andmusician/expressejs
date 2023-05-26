const { Sequelize, Model, DataTypes } = require("sequelize");
const connection = require("../database");

const Pergunta = connection.define("pergunta", {
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descricao: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

Pergunta.sync({ force: false }).then(() => {});

// class Pergunta extends Model {}
// Pergunta.init(
//   {
//     titulo: DataTypes.STRING,
//     descricao: DataTypes.TEXT,
//   },
//   {
//     connection,
//     modelName: "perguntas",
//   }
// );

// module.exports = new Pergunta();
