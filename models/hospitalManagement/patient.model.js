import mongoose, { Mongoose } from 'mongoose'

const patientSchema = new Mongoose.Schema({

},{timestamps: true})

export const patientModel = mongoose.Model("patient", patientSchema)