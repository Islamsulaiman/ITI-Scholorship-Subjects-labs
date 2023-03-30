const jwt = require('jsonwebtoken');
const express = require('express');

const {
  check, validationResult, body,
} = require('express-validator');

const usersMethods = require('../controllers');
require('dotenv').config();

const router = express.Router();

// 1. create new user
router.post(
  '/',
  [check('email').isEmail().normalizeEmail().trim()],
  body('password').isAlphanumeric().trim(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // res.status(424).json(errors);
      throw new Error('Error in emails');
    }

    const {
      userName, password, firstName, lastName, dob, email,
    } = req.body;

    const user = await usersMethods.users.create({
      userName, password, firstName, lastName, dob, email,
    });

    res.json(user);
  },
);

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

  const user = await usersMethods.users.update(id, userName);
  res.send(`user where updated to ${user}`);
});

// 5. login
router.post('/login', async (req, res) => {
  const { password, email } = req.body;

  // send to controller to verify the password
  await usersMethods.users.login(password, email);

  // return jwt to the user
  const token = jwt.sign({ email }, process.env.TOKEN_SECRET, { expiresIn: '1h' });

  res.send(token);
});
module.exports = router;
