'use strict';

const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL || 'sqlite:memory');

// Create a Sequelize model
const Users = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// before create hook
//Users.beforeCreate();

//Users.authenticateStrings = function (username, password) {

//};

module.exports = {
  sequelize,
  Users,
};