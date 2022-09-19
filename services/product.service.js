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

// bulk update existing products
exports.bulkUpdateProductsServices = async (data) => {
  // const result = await Product.updateMany(
  //   { _id: data.ids },
  //   { $inc: data.data },
  //   { runValidators: true }
  // );

  /* example:
    {
      "ids": [
          "631c0b48ee80c32cf05f05a5",
          "631c0c1e589ed42e14180abd"
      ],
      "data": {
          "price": 3
      }
    }
  */

  const prods = [];
  data.products.forEach((product) => {
    prods.push(
      Product.updateOne(
        { _id: product.id },
        {
          $set: { name: product.data.name },
          $inc: { price: product.data.price },
        },
        { runValidators: true }
      )
    );
  });

  const result = await Promise.all(prods);

  return result;
};

// delete a product
exports.deleteProductService = async (pid) => {
  const result = await Product.findByIdAndDelete(pid);
  return result;
};

// bulk delete existing products
exports.bulkDeleteProductsService = async (data) => {
  const result = await Product.deleteMany({ _id: data.ids });
  return result;
};
