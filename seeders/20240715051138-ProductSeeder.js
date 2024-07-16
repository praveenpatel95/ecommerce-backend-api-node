'use strict';
const fs = require('fs');
const path = require('path');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const products = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../src/products.json'), 'utf8'));

    // Fetch category IDs
    const categories = await queryInterface.sequelize.query(
        `SELECT id, name FROM Categories;`
    );

    const categoryMap = categories[0].reduce((map, category) => {
      map[category.name] = category.id;
      return map;
    }, {});

    const productData = products.map(product => ({
      name: product.name,
      price: product.price,
      category_id: categoryMap[product.category]
    }));

    await queryInterface.bulkInsert('Products', productData, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', null, {});
  }
};
