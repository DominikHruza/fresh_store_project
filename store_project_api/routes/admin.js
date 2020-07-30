const express = require("express");
const router = express.Router();
const adminCtrl = require("../controllers/admin-ctrl");

const { addProduct, getCategories } = adminCtrl;

router.post("/add-product", addProduct);
router.get("/categories", getCategories);
module.exports = router;
