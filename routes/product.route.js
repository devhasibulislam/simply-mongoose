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
  bulkInsertProducts,
  removeAllProducts,
  getLimitedSpecificProducts,
} = require("../controllers/product.controller");

// router level connection
const router = express.Router();

router.route("/bulk-insert").post(bulkInsertProducts);
router.route("/bulk-update").patch(bulkUpdateProducts);
router.route("/delete-all").delete(removeAllProducts);
router.route("/bulk-delete").delete(bulkDeleteProducts);
router.route("/limited-specific").get(getLimitedSpecificProducts);

router.route("/").get(getProducts).post(postAProduct);

router.route("/:id").patch(updateAProduct).delete(deleteAProduct);

module.exports = router;
