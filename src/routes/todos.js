const express = require("express");
const app = express();
const router = express.Router();
const {
  listToDoController,
  createTodoController,
  updateToDoController,
  deleteTodoController,
} = require("../controllers/todos");

router.get("/todos", listToDoController);

router.post("/todos", createTodoController);

router.patch("/todos/:id", updateToDoController);

router.delete("/todos/:id", deleteTodoController);

module.exports = router;
