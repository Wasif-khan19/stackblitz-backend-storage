import mongoose, { mongo } from 'mongoose'

const productCategorySchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"

    },
    orderId: {
        type: Number,
        required: true,
    }

})

const orderSchema = new mongoose.Schema({
    orderPrice: {
        type: Number,
        required: true,
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Customer",
        required: true
    },
    orderItems: {
        type: [productCategorySchema]
    },
    address:{
        type:String,
        required: true
    },
    status:{
        type:String,
        enum:["Pending" , "Cancelled" , "Delivered"],
        default:"Pending"
    }
}, { timestamps: true })

export const orderModel = mongoose.model("order", orderSchema)