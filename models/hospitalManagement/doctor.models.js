import mongoose from 'mongoose'

const doctorSchema = new mongoose.Schema({
    name:{
        required: true,
        type: String,
    },
    
},{timestamps: true})

export const doctorModel = mongoose.Model("doctormodel", doctorSchema)