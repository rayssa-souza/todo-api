const { Sequelize } = require("sequelize");

//biblioteca para utilizar o msql

//conexão com o banco de dados V
const sequelize = new Sequelize("todo_app_db", "admin", "admin", {
  dialect: "mysql",
});

module.exports = sequelize;
