const Todo = require('../models');

// 1. creatre new todo
const create = (data) => Todo.todos.create(data);

// 2. update todo task
const update = (id, title) => Todo.todos.updateOne({ userId: id }, { title });

// 2. delete specific todo
const deleteTodo = (id) => Todo.todos.deleteOne({ userId: id });

// 4. get all todos for specific user
const getUserTodos = (userId) => Todo.todos.find({ userId }, {
  userId: 1, title: 1, status: 1, _id: 0,
});

// 5. get filered todos with limit
const filteredTodos = (limit, skip, status, userId) => Todo.todos.find(
  { status, userId },
  {
    userId: 1, title: 1, status: 1, _id: 0,
  },
).limit(parseInt(limit, 10)).skip(parseInt(skip, 10));

module.exports = {
  create,
  update,
  deleteTodo,
  getUserTodos,
  filteredTodos,
};
