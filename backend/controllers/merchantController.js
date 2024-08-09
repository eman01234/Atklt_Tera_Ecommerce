import Product from "../models/product.js";
import { validationResult } from "express-validator";

// Add a new product for a specific merchant
export const addProductForMerchant = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { merchantId, name, description, category, price } = req.body;
  const imageUrl = req.file ? req.file.path : null; // using multer for file uploads

  try {
    const newProduct = new Product({
      merchant: merchantId,
      name,
      description,
      category,
      price,
      imageUrl,
    });

    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

// Update product details for a specific merchant
export const updateProductForMerchant = async (req, res) => {
  const { name, description, category, price } = req.body;

  try {
    const product = await Product.findById(req.params.productId);

    if (!product) {
      return res.status(404).json({ msg: "Product not found" });
    }

    product.name = name || product.name;
    product.description = description || product.description;
    product.category = category || product.category;
    product.price = price || product.price;
    if (req.file) {
      product.imageUrl = req.file.path;
    }

    await product.save();
    res.status(200).json(product);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

// Delete a product for a specific merchant
export const deleteProductForMerchant = async (req, res) => {
  try {
    const product = await Product.findById(req.params.productId);

    if (!product) {
      return res.status(404).json({ msg: "Product not found" });
    }

    await product.remove();
    res.status(200).json({ msg: "Product removed" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

// Display all products for a specific merchant
export const getAllProductsForMerchant = async (req, res) => {
  try {
    const products = await Product.find({ merchant: req.params.merchantId });
    res.status(200).json(products);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};
