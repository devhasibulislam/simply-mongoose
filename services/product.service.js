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

// update an existing product
exports.updateProductService = async (pid, data) => {
  /* approach 1: good but not much better */
  const result = await Product.updateOne(
    { _id: pid },
    // { $set: data },
    { $inc: data }, // increment number data by a given range
    { runValidators: true }
  );

  /* approach 2: recommended */
  // const product = await Product.findById(pid);
  // const result = await product.set(data).save();

  return result;
};
