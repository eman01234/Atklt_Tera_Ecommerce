import express from "express";
import {
  createPayment,
  getAllPayments,
  getPaymentById,
  updatePayment,
  deletePayment,
} from "../controllers/paymentController.js"; // Adjust the path as necessary

const router = express.Router();

// Create a new payment
router.post("/", createPayment);

// Get all payments
router.get("/", getAllPayments);

// Get a payment by ID
router.get("/:id", getPaymentById);

// Update a payment by ID
router.put("/:id", updatePayment);

// Delete a payment by ID
router.delete("/:id", deletePayment);

export default router;
