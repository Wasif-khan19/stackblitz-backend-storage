import mongoose from "mongoose"

const subTodosSchema = new mongoose.Schema({
    content:{
        type: String,
        required: true,
        
    }
},{timestamps: true})

export const subTodos =  mongoose.model('SubTodosSchema', subTodosSchema)