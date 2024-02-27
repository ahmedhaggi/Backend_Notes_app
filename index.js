import express from "express";
import mongoose from "mongoose"
import noteRoutes from "./routes/noteRoutes.js";
import dotenv from 'dotenv';

dotenv.config()

const app = express();
app.use(express.json());

const PORT = 8000;
app.use("/api/notes", noteRoutes)
app.listen(PORT, () => {
    console.log(`Server is runing on port:${PORT}`)
})

mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("Database is connected");
})