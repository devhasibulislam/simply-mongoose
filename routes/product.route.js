// external imports
const express = require("express");

// internal import
const {
  getProducts,
  postAProduct,
  updateAProduct,
  bulkUpdateProducts,
} = require("../controllers/product.controller");

// router level connection
const router = express.Router();

router.route("/").get(getProducts).post(postAProduct);
router.route("/bulk-update").patch(bulkUpdateProducts);
router.route("/:id").patch(updateAProduct);

module.exports = router;
