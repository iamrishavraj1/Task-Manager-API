const getAllTask = (req, res) => {
  res.send("all tasks");
};

const getTask = (req, res) => {
  res.send("get single task");
};

const createTask = (req, res) => {
  res.send("create task");
};

const updateTask = (req, res) => {
  res.send("update task");
};

const deleteTask = (req, res) => {
  res.send("delete task");
};

module.exports = { getAllTask, getTask, createTask, updateTask, deleteTask };