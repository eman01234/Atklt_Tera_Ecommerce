import express from "express";
import { check } from "express-validator";
import multer from "multer";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import auth from "../middleware/auth.js";
import {
  addProductForMerchant,
  updateProductForMerchant,
  deleteProductForMerchant,
  getAllProductsForMerchant,
} from "../controllers/merchantController.js";

const router = express.Router();

// Workaround for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ensure the uploads directory exists
const uploadDir = path.join(__dirname, "../uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

// Add a product for a specific merchant
router.post(
  "/product",
  [
    auth,
    upload.single("image"),
    [
      check("merchantId", "Merchant ID is required").not().isEmpty(),
      check("name", "Name is required").not().isEmpty(),
      check("category", "Category is required").not().isEmpty(),
      check("description", "Description is required").not().isEmpty(),
      check("price", "Price is required").isNumeric(),
    ],
  ],
  addProductForMerchant
);

// Update a product for a specific merchant
router.put(
  "/product/:id",
  [
    auth,
    upload.single("image"),
    [
      check("name", "Name is required").not().isEmpty(),
      check("category", "Category is required").not().isEmpty(),
      check("description", "Description is required").not().isEmpty(),
      check("price", "Price is required").isNumeric(),
    ],
  ],
  updateProductForMerchant
);

// Delete a product for a specific merchant
router.delete("/product/:productId", auth, deleteProductForMerchant);

// Get all products for a specific merchant
router.get("/merchant/:merchantId/products", auth, getAllProductsForMerchant);

export default router;
