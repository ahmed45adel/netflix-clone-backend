import express from "express";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.route.js";
import movieRoutes from "./routes/movie.route.js";
import { connectDB } from "./config/db.js";

const app = express();

app.use(express.json()); // will allow us to parse req.body
app.use(cookieParser());

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/movie", movieRoutes);



app.listen(PORT, () => {
	console.log("Server started at http://localhost:" + PORT);
	connectDB();
});
