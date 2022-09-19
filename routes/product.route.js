// external imports
const express = require("express");

// internal import
const {
  getProducts,
  postAProduct,
  updateAProduct,
  bulkUpdateProducts,
  deleteAProduct,
} = require("../controllers/product.controller");

// router level connection
const router = express.Router();

router.route("/bulk-update").patch(bulkUpdateProducts);
router.route("/").get(getProducts).post(postAProduct);
router.route("/:id").patch(updateAProduct).delete(deleteAProduct);

module.exports = router;
