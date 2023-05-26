const connection = require("./database/database");

connection
  .authenticate()
  .then(() => {
    console.log("Database conectado");
  })
  .catch((error) => {
    console.log(error);
  });
