'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
     //
    }
  }
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING
  },
  {
    sequelize,
    modelName: 'User',
    timestamps: false
  });
  return User;
};