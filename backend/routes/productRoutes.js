import express from "express";
import {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js"; // Adjust the path as necessary
import upload from "../config/multerconfig.js";

const router = express.Router();

// Create a new product
router.post("/", upload.single("imageUrl"), createProduct);

// Get all products
router.get("/", getAllProducts);

// Get a product by ID
router.get("/:id", getProductById);

// Update a product by ID
router.put("/:id", updateProduct);

// Delete a product by ID
router.delete("/:id", deleteProduct);

export default router;
