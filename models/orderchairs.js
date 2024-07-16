'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderChairs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  OrderChairs.init({
    order_id: DataTypes.INTEGER,
    chair_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Order_Chairs',
    timestamps:false
  });
  return OrderChairs;
};