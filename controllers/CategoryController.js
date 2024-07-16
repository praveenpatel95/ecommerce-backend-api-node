const {Category} = require('../models');
const AsyncHandler = require("../utils/AsyncHandler");
const { sendSuccess } = require('../utils/responseHandler');

exports.getCategoriesWithProducts = AsyncHandler(async (req, res) => {
        const response = await Category.getCategoriesWithProducts();
        sendSuccess(res, response);
    }
);

