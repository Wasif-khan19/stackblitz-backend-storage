import mongoose, { Mongoose } from "mongoose";

const hospitalSchema = new Mongoose.Schema({},{timestamps: true})

export const hospitalModel = Mongoose.Model("hospitalschema", hospitalSchema)