import express from "express";
import {
  createReview,
  getAllReviews,
  getReviewById,
  updateReview,
  deleteReview,
} from "../controllers/productReviewCotroller.js"; // Adjust the path as necessary

const router = express.Router();

// Create a new review
router.post("/", createReview);

// Get all reviews
router.get("/", getAllReviews);

// Get a review by ID
router.get("/:id", getReviewById);

// Update a review by ID
router.put("/:id", updateReview);

// Delete a review by ID
router.delete("/:id", deleteReview);

export default router;
