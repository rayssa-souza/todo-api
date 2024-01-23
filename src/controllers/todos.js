const {
  listToDoService,
  createToDoService,
  updateToDoService,
  deleteTodoService,
} = require("../services/todos");

const listToDoController = async (req, res) => {
  const results = await listToDoService();
  res.status(200).send(results);
};

const createTodoController = async (req, res) => {
  const createTask = req.body.task;
  const results = await createToDoService(createTask);
  res.status(201).send(results);
};

const updateToDoController = async (req, res) => {
  const taskId = req.params.id;
  const updatedTask = req.body.task;
  const updatedTaskCompleted = req.body.completed;
  const results = await updateToDoService(
    taskId,
    updatedTask,
    updatedTaskCompleted
  );
  res.status(200).send(results);
};

const deleteTodoController = async (req, res) => {
  const taskId = req.params.id;
  const results = await deleteTodoService(taskId);
  console.log(results);
  res.status(200).json(results);
};

module.exports = {
  listToDoController,
  createTodoController,
  updateToDoController,
  deleteTodoController,
};
