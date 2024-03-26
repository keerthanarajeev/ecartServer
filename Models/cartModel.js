const mongoose = require('mongoose')

// model -schema

const cartSchema = {
    userId: {
        type: String,
        required: true
    },
    id: {
        type: Number,
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
    },
    quantity:{
        type: Number,
        required:true
    },
    grandtotal:{
        type:Number,
        required:true
    }
}

// model

const carts=mongoose.model("carts",cartSchema)

// export

module.exports=carts