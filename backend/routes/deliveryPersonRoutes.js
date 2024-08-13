import express from "express";
import {
  createDeliveryPerson,
  getAllDeliveryPersons,
  getDeliveryPersonById,
  updateDeliveryPerson,
  deleteDeliveryPerson,
} from "../controllers/deliveryPersonController.js";

const router = express.Router();

// Create a new delivery person
router.post("/", createDeliveryPerson);

// Get all delivery persons
router.get("/", getAllDeliveryPersons);

// Get a delivery person by ID
router.get("/:id", getDeliveryPersonById);

// Update a delivery person by ID
router.put("/:id", updateDeliveryPerson);

// Delete a delivery person by ID
router.delete("/:id", deleteDeliveryPerson);

export default router;
