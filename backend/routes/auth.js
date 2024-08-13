import express from "express";
import {
  loginUser,
  getUserById,
  getAllUsers,
  updateUser,
  deleteUser,
} from "../controllers/authController.js"; // Adjust the path as necessary

const router = express.Router();

// Login user
router.post("/login", loginUser);

// Get all users
router.get("/", getAllUsers);

// Get a user by ID
router.get("/:id", getUserById);

// Update a user by ID
router.put("/:id", updateUser);

// Delete a user by ID
router.delete("/:id", deleteUser);

export default router;
