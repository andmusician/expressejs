const Sequelize = require("sequelize");
const dotenv = require("dotenv");
dotenv.config();

const connection = new Sequelize(
  "guiaperguntas",
  process.env.MYSQL_USERNAME,
  process.env.MYSQL_PASSWORD,
  {
    host: process.env.HOST,
    dialect: process.env.DIALECT,
  }
);

module.exports = connection;
