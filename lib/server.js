'use strict';

const express = require('express');
const app = express();

const signInRouter = require('auth/routes/signin.js');
const signUpRouter = require('auth/routes/signup.js');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(signInRouter);
app.use(signUpRouter);

// const bcrypt = require('bcrypt');
// const base64 = require('base-64');

// const logger = require('./middleware/logger.js.js');

// app.use(logger);



module.exports = {
  start: (port) => {
    app.listen(port, () => {
      console.log(`hi, michael, your server is running on port ${port}`);
    });
  },
  app,
};