const Product = require("../models/Product");

exports.getTopSellers = async (req, res) => {
  try {
    const products = await Product.getTopSellers();
    res.status(200).json(products);
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Server error!" });
  }
};

exports.getProducts = async (req, res, next) => {
  const categoryID = parseInt(req.query.category);

  //If search by category go to next middleware
  if (categoryID) {
    next();
    return;
  }

  try {
    const itemsPerPage = 6;
    const page = req.query.page;
    const startIndex = (page - 1) * itemsPerPage;

    const products = await Product.getAllProducts(startIndex, itemsPerPage);
    res.status(200).json(products);
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Server error!" });
  }
};

exports.getProductsByCategory = async (req, res) => {
  try {
    const categoryID = parseInt(req.query.category);
    const itemsPerPage = 6;
    const page = req.query.page;
    const startIndex = (page - 1) * itemsPerPage;

    const result = await Product.getByCategory(
      categoryID,
      startIndex,
      itemsPerPage
    );
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Server error!" });
  }
};
