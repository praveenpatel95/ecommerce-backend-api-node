'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderTops extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  OrderTops.init({
    order_id: DataTypes.INTEGER,
    top_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Order_Tops',
    timestamps:false
  });
  return OrderTops;
};