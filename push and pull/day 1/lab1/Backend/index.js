/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const router = require('./routes');

const PORT = process.env.PORT || 3001;

const app = express();
const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/Notification';

app.use(cors());
app.use(express.json());
app.use(router);

app.use('*', (req, res) => {
    res.sendStatus(404);
});

app.use((err, req, res, next) => {
    console.log(err);
});

mongoose.connect(MONGO_URL);
app.listen(PORT, () => {
    console.log(`your app up on ${PORT}`);
});
