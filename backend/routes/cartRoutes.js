import express from "express";
import {
  createOrUpdateCart,
  getCartByCustomerId,
  updateCartItems,
  deleteCartByCustomerId,
} from "../controllers/cartController.js"; // Adjust the path as necessary

const router = express.Router();

// Create or update a cart for a customer
router.post("/", createOrUpdateCart);

// Get cart by customer ID
router.get("/:customerId", getCartByCustomerId);

// Update cart items
router.put("/", updateCartItems);

// Delete cart by customer ID
router.delete("/:customerId", deleteCartByCustomerId);

export default router;
