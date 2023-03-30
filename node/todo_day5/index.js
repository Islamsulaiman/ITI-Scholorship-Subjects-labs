const express = require('express');
const cors = require('cors');

require('dotenv').config();
// const path = require('path');

const mogoose = require('mongoose');

const routes = require('./routes');

const app = express();

const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/todo';
const conn = mogoose.connect(MONGO_URL);

// add the allowed url's only to contact with us
const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(express.json());
app.use(cors(corsOptions));

// to direct the ap towards all of our routes
app.use(routes);

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send('Error happend!!');
});

// for wrong route
app.use((req, res) => {
  res.send('Wrong route');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});

module.exports = conn;
