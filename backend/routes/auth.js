import express from "express";
import { check } from "express-validator";
import {
  registerUser,
  loginUser,
  getAllUser,
  getUser,
} from "../controllers/authController.js";

const router = express.Router();

router.post("/register", registerUser);
// router.post(
//   "/register",
//   [
//     check("role", "Role is required").not().isEmpty(),
//     check("firstName", "First name is required").not().isEmpty(),
//     check("lastName", "Last name is required").not().isEmpty(),
//     check("email", "Please include a valid email").isEmail(),
//     check(
//       "password",
//       "Please enter a password with 6 or more characters"
//     ).isLength({ min: 6 }),
//     check("phoneNumber", "Phone number is required").not().isEmpty(),
//     check("address", "Address is required").not().isEmpty(),
//   ],
//   registerUser
// );

router.post(
  "/login",
  [
    check("email", "Please include a valid email").isEmail(),
    check("password", "Password is required").exists(),
  ],
  loginUser
);
router.get("/users", getAllUser);
router.get("/users/:id", getUser);
export default router;

// const express = require('express')
// const router = express.Router();
// const albumController = require('../controllers/AlbumController')
// const protect = require('../middleware/authMiddleware')

// // Album routes
// router.post('/albums',  createAlbum);

// router.put('/albums/:id', updateAlbumById);
// router.delete('/albums/:id', .....)
