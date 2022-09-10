// internal import
const Product = require("../models/Product");

// display all products in reverse() form
exports.getAllProducts = async () => {
  const products = await Product.find({});
  return products.reverse();
};

// insert a new product
exports.postAProducts = async (data) => {
  const product = new Product(data);
  const result = await product.save();
  return result;
};
