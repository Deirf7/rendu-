const Task = require("../models/Task");

exports.getTasks = (req, res) => {
  Task.find()
    .then(tasks => res.json(tasks))
    .catch(err => res.status(400).json("Error: " + err));
};
exports.getTaskById = (req, res) => {
  Task.findById
}
