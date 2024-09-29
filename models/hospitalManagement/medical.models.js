import mongoose from "mongoose"

const medicalSchema = new mongoose.Schema({
    
}, { timestamps: true })

export const medicalModel = mongoose.model("medicalrecords", medicalSchema)