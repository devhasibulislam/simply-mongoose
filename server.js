// external imports
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const colors = require("colors");

// internal imports
const DBConnect = require("./utils/dbConnect");

const app = require("./app");

// database connection
DBConnect();

// server
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(colors.bgYellow.bold.underline(`App is running on port ${port}`));
});
