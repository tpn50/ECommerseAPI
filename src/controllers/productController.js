const Product = require("../models/Product");

exports.createProduct = async (req, res) => {
  const { name, quantity } = req.body;

  try {
    const product = new Product({ name, quantity });
    await product.save();
    res.json({ product });
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.listProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json({ products });
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    await Product.findByIdAndDelete(id);
    res.json({ message: "Product deleted" });
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.updateProductQuantity = async (req, res) => {
  const { id } = req.params;
  const { number } = req.query;

  try {
    const product = await Product.findByIdAndUpdate(
      id,
      { $inc: { quantity: number } },
      { new: true }
    );
    res.json({ product, message: "Updated successfully" });
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
