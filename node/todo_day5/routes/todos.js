const express = require('express');

const jwt = require('jsonwebtoken');
const models = require('../models');

require('dotenv').config();

const router = express.Router();

const todosFunctions = require('../controllers');

router.use(async (req, res, next) => {
  // authorization contatins the jwt
  const { authorization } = req.headers;

  const token = jwt.verify(authorization, process.env.TOKEN_SECRET);
  const user = await models.users.findOne({ email: token.email }).exec();

  // add the user data to req object so its accecable from anywhere throught this request lifetime
  req.user = user;
  next();
});

// create new to-do
router.post('/', async (req, res) => {
  const {
    title, status,
  } = req.body;

  const userId = req.user.id;

  try {
    await todosFunctions.todos.create({
      title, status, userId,
    });
  } catch (error) {
    console.log('Erorr creting the document');
  }

  res.send(`New todo "${title}" creted succssefuly`);
});

// 2. update todo title
router.patch('/', async (req, res) => {
  const { newTitle } = req.body;

  const userId = req.user.id;

  await todosFunctions.todos.update(userId, newTitle);
  res.send(`Task title were updated to ${newTitle}`);
});

// 3. delete specific todo
router.delete('/', async (req, res) => {
  const userId = req.user.id;

  await todosFunctions.todos.deleteTodo(userId);
  res.send(`Todo with id :" "${userId}" were deleted!!`);
});

// 4. get specific user todos
router.get('/', async (req, res) => {
  // const { userId } = req.params;

  const userId = req.user.id;

  const todos = await todosFunctions.todos.getUserTodos(userId);

  res.json(todos);
});

// 5. get filered todos with limit to a specific user
router.get('/filtered', async (req, res) => {
  const { limit, skip, status } = req.query;

  const userId = req.user.id;

  const todos = await todosFunctions.todos.filteredTodos(limit, skip, status, userId);

  res.json(todos);
});

module.exports = router;
