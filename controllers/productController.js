const Product = require('../models/Product');

// Get all products
exports.getAllProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

// Get product by ID
exports.getProductById = async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) return res.status(404).json({ error: 'Not found' });
  res.json(product);
};

// Create new product
exports.createProduct = async (req, res) => {
  const { name, price, description, stock } = req.body;
  const product = new Product({ name, price, description, stock });
  await product.save();
  res.status(201).json({ message: 'Product created', product });
};

// Update product by ID
exports.updateProduct = async (req, res) => {
  const { name, price, description, stock } = req.body;
  const product = await Product.findByIdAndUpdate(
    req.params.id,
    { name, price, description, stock },
    { new: true }
  );
  if (!product) return res.status(404).json({ error: 'Not found' });
  res.json({ message: 'Product updated', product });
};

// Delete product by ID
exports.deleteProduct = async (req, res) => {
  const product = await Product.findByIdAndDelete(req.params.id);
  if (!product) return res.status(404).json({ error: 'Not found' });
  res.json({ message: 'Product deleted' });
};
