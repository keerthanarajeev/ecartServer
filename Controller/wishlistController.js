const wishlists = require("../Models/wishlistModel");

exports.addToWishlist = async (req, res) => {
    const { userId, id, title, price, description, category, image, rating } = req.body

    try {

        const item = await wishlists.findOne({ userId, id })
        if (item) {
            res.status(406).json("Product already added in your wishlist")
        }
        else {
            const newItem = new wishlists({
                userId, id, title, price, description, category, image, rating
            })
            await newItem.save()
            res.status(200).json(`${title} product added in wishlist`)
        }

    }
    catch (err) {
        console.error(err.message);
        res.status(400).json({ error: "Added to wishlist API Failed" });
    }
}

exports.getWishlist=async(req,res)=>{
    const {userId}=req.params
    try{
        const products=await wishlists.find({userId})
        if(products){
            res.status(200).json(products)
        }
        else{
            res.status(400).json("Empty Wishlist")
        }
    }
    catch{
        res.status(400).json("GetWishlist API Failed")
    }
}

exports.deleteWishlist=async(req,res)=>{
    const { _id } = req.params;
    try {
        const deletedItem = await wishlists.deleteOne({_id});
        if (deletedItem) {
            res.status(200).json(`Product deleted from wishlist`);
        } else {
            res.status(404).json(`Product not found in wishlist`);
        }
    } catch (err) {
        console.error(err.message);
        res.status(500).json("Delete Wishlist API Failed");
    }
}