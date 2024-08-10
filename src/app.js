import express from "express";
import connectDB from "./utils/db.js";
import astrologerRoutes from "./routes/astrologerRoutes.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api/astrologers", astrologerRoutes);
app.use("/api/users", userRoutes);

// Database Connection
connectDB();

export default app;
