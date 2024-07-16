const express = require('express');
const router = express.Router();
const categoryRoutes = require('./categoryRoutes');
const checkoutRoutes = require('./checkoutRoutes');

router.use('/categories', categoryRoutes);
router.use('/checkout', checkoutRoutes);

module.exports = router;