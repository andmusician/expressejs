const { Sequelize, Model, DataTypes } = require("sequelize");
const connection = require("../database");

const Resposta = connection.define("resposta", {
  corpo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  perguntaId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

Resposta.sync({ force: false }).then(() => {});

module.exports = Resposta;
