const sendSuccess = (res, data, message = 'Success', statusCode = 200) => {
    res.status(statusCode).json({
        status: 'success',
        data,
    });
};

const sendError = (res, error, message = 'An unexpected error occurred', statusCode = 500) => {
    res.status(statusCode).json({
        status: 'error',
        error: error.message || error,
    });
};

module.exports = {
    sendSuccess,
    sendError,
};
