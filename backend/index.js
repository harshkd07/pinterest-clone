import express from 'express';
import dotenv from 'dotenv';
import connectDb from './database/db.js';
import userRoutes from './routes/userRoutes.js';
import pinRoutes from './routes/pinRoutes.js'
import cookieParser from 'cookie-parser';
import cloudinary from "cloudinary";
import path from 'path'

dotenv.config();

cloudinary.v2.config({
    cloud_name: process.env.Cloud_Name,
    api_key: process.env.Cloud_API,
    api_secret : process.env.Cloud_SEC,
});

const app = express();
const port = process.env.PORT || 5000;

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use("/api/user", userRoutes);
app.use("/api/pin", pinRoutes);

const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res)=>{
    res.sendFile(path.join(__dirname, "frontend", "dist","index.html"))
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    connectDb();
});
