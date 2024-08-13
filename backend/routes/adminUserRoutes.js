import express from "express";
import {
  createAdminUser,
  getAllAdminUsers,
  getAdminUserById,
  updateAdminUser,
  deleteAdminUser,
} from "../controllers/adminUserController.js"; // Adjust the path as necessary

const router = express.Router();

// Create a new admin or manager
router.post("/", createAdminUser);

// Get all admin users
router.get("/", getAllAdminUsers);

// Get an admin user by ID
router.get("/:id", getAdminUserById);

// Update an admin user by ID
router.put("/:id", updateAdminUser);

// Delete an admin user by ID
router.delete("/:id", deleteAdminUser);

export default router;
