const express = require('express');

const usersMethods = require('../controllers');

const router = express.Router();

// 1. create new user
router.post('/', async (req, res) => {
  const {
    userName, password, firstName, lastName, dob,
  } = req.body;

  await usersMethods.users.create({
    userName, password, firstName, lastName, dob,
  });

  res.send('new user');
});

// 2. get all users
router.get('/', async (req, res) => {
  const users = await usersMethods.users.get();

  res.send((users));
});

// 3. delete specific user
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await usersMethods.users.deleteUser(id);
  res.send(`User with ID : ${id} is deleted`);
});

// 4. update spcific username
router.patch('/:id', async (req, res) => {
  const { id } = req.params;

  const { userName } = req.body;

  await usersMethods.users.update(id, userName);
  res.send(`user where updated to ${userName}`);
});

module.exports = router;
