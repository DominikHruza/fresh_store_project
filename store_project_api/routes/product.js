const express = require("express");
const router = express.Router();
const productCtrl = require("../controllers/product-ctrl");

const { getTopSellers, getProducts, getProductsByCategory } = productCtrl;
router.get("/top-sellers", getTopSellers);
router.get("/get-products", getProducts, getProductsByCategory);

module.exports = router;
