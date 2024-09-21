import mongoose from 'mongoose'

const Schema=new mongoose.Schema({})

export const User = mongoose.model('User', Schema)