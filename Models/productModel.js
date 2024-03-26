const mongoose = require('mongoose')

// model -schema

const productSchema = {
    id: {
        type: Number,
        unique: true,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    rating: {
        rate:
        {
            type: String,
            required: true
        },
        count: {
            type: Number,
            required: true
        }
    }
}

// model

const products=mongoose.model("products",productSchema)

// export

module.exports=products