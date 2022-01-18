'use strict';

const UserSchema = (sequelize, DataTypes ) => {
  sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
module.exports = UserSchema;