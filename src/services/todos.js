const todoModel = require("../models/todo");

const listToDoService = async () => {
  const result = await todoModel.findAll({
    order: [["createdAt", "DESC"]],
  });

  return result;
};

const createToDoService = async (task, completed = false) => {
  const result = await todoModel.create({ task, completed });
  return result;
};

const updateToDoService = async (id, task, completed) => {
  const result = await todoModel.update(
    { task, completed },
    {
      where: {
        id: id,
      },
    }
  );
  return result;
};

const deleteTodoService = async (id) => {
  const result = await todoModel.destroy({
    where: {
      id: id,
    },
  });
  return result;
};

module.exports = {
  listToDoService,
  createToDoService,
  updateToDoService,
  deleteTodoService,
};
