const sequelize = require("./src/db/connection");
const express = require("express");
const router = require("./src/routes/todos");

const app = express();
const port = 8000;

//entry point

app.use(express.json());

app.use(router);

app.listen(port, async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ force: true });
    console.log("success");
  } catch (err) {
    console.log(err);
  }
});
