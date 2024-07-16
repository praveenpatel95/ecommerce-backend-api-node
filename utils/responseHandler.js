const sendSuccess = (res, data, message = 'Success', statusCode = 200) => {
    res.status(statusCode).json({
        status: 'success',
        data,
    });
};

module.exports = {
    sendSuccess
};
