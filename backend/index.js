import express from "express";
import connectDB from "./config/db.js";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

// Connect Database
connectDB();

const app = express();
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
// Init Middleware
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

// Define Routes
import authRoutes from "./routes/auth.js";
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
