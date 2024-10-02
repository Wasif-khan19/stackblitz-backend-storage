import mongoose from 'mongoose'

const doctorSchema = new mongoose.Schema({
    
},{timestamps: true})

export const doctorModel = mongoose.Model("doctormodel", doctorSchema)
