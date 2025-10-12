import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from './routes/route.js';

dotenv.config()

const app = express()

app.use(express.json())
app.use(cors())

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("✅ MongoDB Connected Successfully")
})
.catch((error) => {
    console.error("❌ MongoDB Connection Error:", error)
})

app.use("/api/auth", userRoutes)

app.get("/",(req,res)=> {
    res.send("🚀 Auth API is running...")
})

app.get("/test", (req,res) => {
    console.log("Test route hit")
    res.json({message: "Test successful"})
})


const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
