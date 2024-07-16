const express = require('express');
const router = express.Router();
const CategoryController = require('../controllers/CategoryController');

router.get('/with-products', CategoryController.getCategoriesWithProducts);

module.exports = router;
