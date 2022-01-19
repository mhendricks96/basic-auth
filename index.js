'use strict';

const { start } = require('./lib/server.js');

const { sequelize } = require('./lib/auth/models/users.js');
const PORT = process.env.PORT || 3000;

sequelize.sync()
  .then(() => start(PORT))
  .catch(err => console.error(err));