'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate(models) {
      Category.hasMany(models.Product, { foreignKey: 'category_id', as: 'products' });
    }

    static async getCategoriesWithProducts() {
      return await this.findAll({
        include: [{
          model: sequelize.models.Product,
          as: 'products'
        }]
      });
    }
  }
  Category.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Category',
    timestamps: false
  });
  return Category;
};