import mongoose, { Mongoose } from "mongoose";

const hospitalSchema = new Mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    specialty:{
        type:String
    },
    
},{timestamps: true})

export const hospitalModel = Mongoose.Model("hospitalschema", hospitalSchema)