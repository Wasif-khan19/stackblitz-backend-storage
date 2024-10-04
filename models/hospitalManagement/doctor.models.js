import mongoose from 'mongoose'

const doctorSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    salary:{
        type:String,
        required:true
    },
    workHospitalName:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"hospitalschema"
        }
    ],
    experience:{
        type:Number,
        required:true
    },
    qualification:{
        type:String,
        required:true
    },

},{timestamps: true})

export const doctorModel = mongoose.Model("doctormodel", doctorSchema)
