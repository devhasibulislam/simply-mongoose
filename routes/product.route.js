// external imports
const express = require("express");

// internal import
const {
  getProducts,
  postAProduct,
  updateAProduct,
  bulkUpdateProducts,
  deleteAProduct,
  bulkDeleteProducts,
} = require("../controllers/product.controller");

// router level connection
const router = express.Router();

router.route("/bulk-update").patch(bulkUpdateProducts);
router.route("/bulk-delete").delete(bulkDeleteProducts);

router.route("/").get(getProducts).post(postAProduct);

router.route("/:id").patch(updateAProduct).delete(deleteAProduct);

module.exports = router;
