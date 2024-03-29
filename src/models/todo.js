const sequelize = require("../db/connection");
const { DataTypes } = require("sequelize");

const Todo = sequelize.define("Todo", {
  task: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  completed: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});

module.exports = Todo;
