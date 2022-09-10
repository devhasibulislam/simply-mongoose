// external imports
const express = require("express");

// internal import
const {
  getProducts,
  postAProduct,
} = require("../controllers/product.controller");

// router level connection
const router = express.Router();

router.route("/").get(getProducts).post(postAProduct);

module.exports = router;
