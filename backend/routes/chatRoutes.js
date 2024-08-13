import express from "express";
import {
  startChat,
  sendMessage,
  getChatMessages,
  getCustomerChats,
  getManagerChats,
  closeChat,
} from "../controllers/chatController.js";

const router = express.Router();

// Start a new chat
router.post("/start", startChat);

// Send a message in a chat
router.post("/send", sendMessage);

// Get all messages in a chat
router.get("/:chatId/messages", getChatMessages);

// Get all chats for a customer
router.get("/customer/:customerId", getCustomerChats);

// Get all chats for a manager
router.get("/manager/:managerId", getManagerChats);

// Close a chat
router.put("/:chatId/close", closeChat);

export default router;
