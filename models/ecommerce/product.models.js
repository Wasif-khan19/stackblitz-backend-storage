import mongoose from " mongoose"

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    }
}, { timestamps: true })

export const productModel = mongoose.Model("product", productSchema)