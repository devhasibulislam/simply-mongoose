// external import
const colors = require("colors");
const mongoose = require("mongoose");

function DBConnect() {
  mongoose.connect(process.env.DATABASE_LOCAL, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  }).then(() => {
    console.log(
      colors.bgGreen.underline.bold("DB with Mongoose connected successfully.")
    );
  });
}

module.exports = DBConnect;