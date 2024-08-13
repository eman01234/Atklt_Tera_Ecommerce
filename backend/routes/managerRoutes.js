import express from "express";
import {
  createManager,
  getAllManagers,
  getManagerById,
  updateManager,
  deleteManager,
} from "../controllers/managerController.js";

const router = express.Router();

// Create a new manager
router.post("/", createManager);

// Get all managers
router.get("/", getAllManagers);

// Get a manager by ID
router.get("/:id", getManagerById);

// Update a manager by ID
router.put("/:id", updateManager);

// Delete a manager by ID
router.delete("/:id", deleteManager);

export default router;
