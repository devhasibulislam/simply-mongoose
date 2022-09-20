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
} = require("../controllers/product.controller");

// router level connection
const router = express.Router();

router.route("/bulk-insert").post(bulkInsertProducts);
router.route("/bulk-update").patch(bulkUpdateProducts);
router.route("/delete-all").delete(removeAllProducts);
router.route("/bulk-delete").delete(bulkDeleteProducts);

router.route("/").get(getProducts).post(postAProduct);

router.route("/:id").patch(updateAProduct).delete(deleteAProduct);

module.exports = router;
