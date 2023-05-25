const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.post("/create", productController.createProduct);
router.get("/", productController.listProducts);
router.delete("/:id", productController.deleteProduct);
router.post("/:id/update_quantity", productController.updateProductQuantity);

module.exports = router;
