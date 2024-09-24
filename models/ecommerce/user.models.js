import mongoose from "mongoose";

const user = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        unique: true,
    }
}, { timestamps: true })

export const userModel = mongoose.model("User", user)
