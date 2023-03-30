const express = require('express');

const router = express.Router();

const todos = require('./todos');
const users = require('./users');

const handleError = (fn) => (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next);

router.use('/todos', handleError(todos));
router.use('/users', handleError(users));

module.exports = router;
