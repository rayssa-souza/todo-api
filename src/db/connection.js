const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("todo_app_db", "admin", "admin", {
  dialect: "mysql",
});

module.exports = sequelize;
