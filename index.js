const express = require('express');
const cors = require('cors');
const app = express();
const indexRouter = require('./routes/index');
const ApiError = require("./utils/ApiError");
const ErrorHandler = require("./utils/ErrorHandler");
require("dotenv").config();

app.use(cors())
app.use(express.json());

app.use('/api', indexRouter);

app.all("*", (req, res, next) => {
   next(new ApiError("Route not defined", 404));
});
app.use(ErrorHandler);

const PORT = process.env.PORT || 3002;
const HOST = process.env.HOST || "localhost";

app.listen(PORT, () => {
   console.log(`Server is running: ${HOST}:${PORT}`);
});
