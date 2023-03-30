const express = require('express');

const router = express.Router();

const todosFunctions = require('../controllers');

// create new to-do
router.post('/', async (req, res) => {
  const {
    title, userId, status,
  } = req.body;

  try {
    await todosFunctions.todos.create({
      title, userId, status,
    });
  } catch (error) {
    console.log('Erorr creting the document');
  }

  res.send(`New todo "${title}" creted succssefuly`);
});

// 2. update todo title
router.patch('/:id', async (req, res) => {
  const { id } = req.params;
  const { newTitle } = req.body;

  await todosFunctions.todos.update(id, newTitle);
  res.send(`Task title were updated to ${newTitle}`);
});

// 3. delete specific todo
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await todosFunctions.todos.deleteTodo(id);
  res.send(`Todo with id :" "${id}" were deleted!!`);
});

// 4. get specific user todos
router.get('/:userId', async (req, res) => {
  const { userId } = req.params;
  const todos = await todosFunctions.todos.getUserTodos(userId);

  res.send(todos);
});

// 5. get filered todos with limit
router.get('/', async (req, res) => {
  const { limit, skip, status } = req.query;

  const todos = await todosFunctions.todos.filteredTodos(limit, skip, status);

  res.send(todos);
});

module.exports = router;
