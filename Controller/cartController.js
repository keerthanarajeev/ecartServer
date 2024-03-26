const { response } = require("express");
const carts = require("../Models/cartModel");

exports.addToCart = async (req, res) => {
    const { id, title, price, description, category, image, rating, quantity } = req.body
    const userId = req.payload
    try {
        const existingProduct = await carts.findOne({ userId, id })
        if (existingProduct) {
            existingProduct.quantity += 1
            existingProduct.grandtotal = existingProduct.price * existingProduct.quantity
            existingProduct.save()
            res.status(200).json("Cart Item Quantity Incremented")
        }
        else {
            const newCart = new carts({
                userId, id, title, price, description, category, image, rating, quantity, grandtotal: price
            })
            await newCart.save()
            res.status(200).json("Product Added in Cart")

        }
    }
    catch {
        res.status(400).json("Add to Cart API Failed")

    }
}



exports.getcart = async (req, res) => {
    const userId = req.payload
    try {
        const products = await carts.find({ userId })
        if (products) {
            res.status(200).json(products)
        }
        else {
            res.status(400).json("Empty Cart")
        }
    }
    catch {
        res.status(400).json("GetCart API Failed")
    }
}

exports.removeCart = async (req, res) => {
    const { _id } = req.params
    try {
        await carts.deleteOne({ _id })
        res.status(200).json("Product Removed from Cart")
    }
    catch {
        res.status(400).json("Delete Cart API Failed")
    }
}

exports.incrementCount = async(req, res) => {
    const {_id} = req.params
    // try {
       var existingProduct = await carts.findOne({_id})
       if(existingProduct){
        existingProduct.quantity+=1
        existingProduct.grandtotal=existingProduct.quantity*existingProduct.price
        await existingProduct.save()
        res.status(200).json("cart Item Incremented")
       }
       else{
        res.status(400).json("product not found")

    //    }
    }
    // catch {
    //     res.status(400).json("cart Increement API Failed    ")

    // }
}

exports.decrementCount = async(req, res) => {
    const {_id} = req.params
    try {
       var existingProduct = await carts.findOne({_id})
       if(existingProduct){
        existingProduct.quantity-=1
        if(existingProduct.quantity==0){

           await carts.deleteOne({_id})
           res.status(200).json("Item Removed")
        }
        else{
            existingProduct.grandtotal=existingProduct.quantity*existingProduct.price
            await existingProduct.save()
            res.status(200).json("cart Item Decremented")
        }

       }
       else{
        res.status(400).json("product not found")

       }
    }
    catch {
        res.status(400).json("cart Decrement API Failed    ")

    }
}

exports.emptyCart=async(req,res)=>{
    const userId=req.payload
    // try{
node
       await carts.deleteMany({userId})
       res.status(200).json("cart Item Removed")

    // }
    // catch{
    //     res.status(400).json("cart Empty API Failed    ")

    // }
}