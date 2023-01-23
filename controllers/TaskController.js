const Task = require("../models/TaskModel");
const getAllTask = (req, res) => {
  res.send("all tasks");
};

const getTask = (req, res) => {
  res.send({ id: req.params.id });
};

const createTask = async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).send({ task });
};

const updateTask = (req, res) => {
  res.send("update task");
};

const deleteTask = (req, res) => {
  res.send("delete task");
};

module.exports = { getAllTask, getTask, createTask, updateTask, deleteTask };
