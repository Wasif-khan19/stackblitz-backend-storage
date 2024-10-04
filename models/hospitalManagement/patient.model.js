import mongoose, { Mongoose } from 'mongoose'

const patientSchema = new Mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    bloodGroup:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    problem:{
        type:String,
        required:true
    }
},{timestamps: true})

export const patientModel = mongoose.Model("patient", patientSchema)