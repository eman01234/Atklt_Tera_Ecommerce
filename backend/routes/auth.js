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

router.post("/login", loginUser);
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
