const {
  getAllProducts,
  postAProducts,
  updateProductService,
} = require("../services/product.service");

exports.getProducts = async (req, res, next) => {
  try {
    // const products = await Product.find({}); // query all products
    // const products = await Product.find({_id: "631ad4c36a61373a687819bc"}); // query a product with single property
    // const products = await Product.find({_id: "631ad4c36a61373a687819bc", name: "Ambemohar"}); // query a product with multiple property
    // const products = await Product.find({
    //   $or: [
    //     { name: "Split & skinned black gram1" },
    //     { name: "Red lentils" },
    //   ],
    // }); // query with or operator and "_id" is very sensitive be careful about comparing with "_id"
    // const products = await Product.find({status: {$ne: "Out of Stock"}}); // query not equal "Out of Stock"
    // const products = await Product.find({quantity: {$gt: 1}}); // query greater than 100
    // const products = await Product.find({quantity: {$gte: 1}}); // query greater than or equal 1
    // const products = await Product.find({status: {$in: "Discontinued"}}); // query that is "Discontinued"
    // const products = await Product.find({status: {$in: ["Discontinued", "Out of Stock"]}}); // query that is "Discontinued" & "Out of Stock"
    // const products = await Product.find({}, "-_id name quantity status"); // query without "_id" & with "name, quantity & status"
    // const products = await Product.find({}).limit(3); // query display limit
    // const products = await Product.find({}).sort({quantity: 1}); // query quantity in ascending order
    // const products = await Product.find({}).sort({quantity: -1}); // query quantity in descending order
    // const products = await Product.find({}).select({_id: 0, name: 1, description: 1}); // query without "_id" with name and description

    /* using query builder */
    // const products = await Product.where("quantity").equals(3); // query a product with quantity [non chaining]
    // const products = await Product.where("quantity")
    //   .equals(3)
    //   .where("price")
    //   .gt(50)
    //   .lt(150); // query a doc with multiple properties [chaining]

    // const products = await Product.where("price")
    //   .lte(500)
    //   .gte(50)
    //   .where("name")
    //   .equals(/\w/)
    //   .limit(3)
    //   .sort({ quantity: 1 }); // query a doc with multiple properties [chaining]

    // res.status(200).json({
    //   success: true,
    //   message: "OK",
    //   count: products.length,
    //   data: products,
    // });

    // const product = await Product.findById("631b36c6043d59302c68baa1");

    const product = await getAllProducts();

    res.status(200).json({
      success: true,
      message: "OK",
      data: product,
    });
  } catch (error) {
    next();
  }
};

exports.postAProduct = async (req, res, next) => {
  try {
    /**
     * Two insertion method:
     * 1. save()
     * 2. create()
     */

    /* 1. Save method */
    // changes occur within object
    // const product = new Product(req.body);

    // if (product.quantity === 0) {
    //   product.status = "Out of Stock";
    // }

    const result = await postAProducts(req.body);
    result.logger();

    /* 2. Create method */
    // const result = await Product.create(req.body);

    // console.log(req.body);

    res.status(202).json({
      success: true,
      message: "Accepted",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

exports.updateAProduct = async (req, res, next) => {
  try {
    const result = await updateProductService(req.params.id, req.body);
    res.status(202).json({
      success: true,
      message: "Accepted",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
