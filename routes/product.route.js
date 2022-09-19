// external imports
const express = require("express");

// internal import
const {
  getProducts,
  postAProduct,
  updateAProduct,
} = require("../controllers/product.controller");

// router level connection
const router = express.Router();

router.route("/").get(getProducts).post(postAProduct);
router.route("/:id").patch(updateAProduct);

module.exports = router;
