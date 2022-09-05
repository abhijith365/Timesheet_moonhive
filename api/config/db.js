import mongoose from "mongoose";

export const connect = () => {
    try {
        mongoose.connect(process.env.MONGODB_URL, () => { console.log("Database Connected...") })
    } catch (err) {
        console.log("Database connection error", err.message)
    }
}