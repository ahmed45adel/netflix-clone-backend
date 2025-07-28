import express from "express";
import cookieParser from "cookie-parser";

import authRoutes from "../routes/auth.route.js";
import movieRoutes from "../routes/movie.route.js";
import tvRoutes from "../routes/tv.route.js";
import searchRoutes from "../routes/search.route.js";

import { connectDB } from "../config/db.js";
import { protectRoute } from "../middleware/protectRoute.js";
import cors from "cors";

const app = express();
const corsConfig = {
  origin: `${process.env.CLIENT_URL}`, credentials: true, methods: ["GET", "POST", "PUT", "DELETE", "PATCH"]};
app.options("*", cors(corsConfig)); // Pre-flight request for all routes
app.use(cors(corsConfig));


app.use(express.json({ limit: "10mb" }));
app.use(cookieParser());
app.use(express.static("public")); // Serve static files from public directory
app.get('/', (req, res) => {
  res.send("Server is running");
});
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/movie", protectRoute, movieRoutes);
app.use("/api/v1/tv", protectRoute, tvRoutes);
app.use("/api/v1/search", protectRoute, searchRoutes);

connectDB();
export default app;