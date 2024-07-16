const AsyncHandler = require("../utils/AsyncHandler");
const checkoutService = require('../services/checkoutService');
const {sendSuccess} = require("../utils/responseHandler");

exports.checkout = AsyncHandler(async (req, res) => {
        const response = await checkoutService.checkoutProcess(req.body)
        sendSuccess(res, response);
    }
);

