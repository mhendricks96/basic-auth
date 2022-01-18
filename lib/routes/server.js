'use strict';

const express = require('express');
const app = express();
app.use(express.json());


const bcrypt = require('bcrypt');
const base64 = require('base-64');

const logger = require('./middleware/logger.js');

app.use(logger);
app.use(express.json());



module.exports = {
  start: (port) => {
    app.listen(port, () => {
      console.log(`hi, michael, your server is running on port ${port}`);
    });
  },
  app,
};