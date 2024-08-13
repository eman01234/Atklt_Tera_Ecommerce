import express from "express";
import {
  createMerchant,
  getAllMerchants,
  getMerchantById,
  updateMerchant,
  deleteMerchant,
} from "../controllers/merchantController.js"; // Adjust the path as necessary
import upload from "../config/multerconfig.js";

const router = express.Router();

// Create a new merchant
router.post("/", upload.single("trade_permit"), createMerchant);

// Get all merchants
router.get("/", getAllMerchants);

// Get a merchant by ID
router.get("/:id", getMerchantById);
3;
// Update a merchant by ID
router.put("/:id", updateMerchant);

// Delete a merchant by ID
router.delete("/:id", deleteMerchant);

export default router;
