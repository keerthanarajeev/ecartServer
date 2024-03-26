const products = require("../Models/productModel");

exports.getAllProducts=async(req,res)=>{

      var searchQuery = req.query.search
      const query = {
        title : {
            $regex: searchQuery, $options: "i"    //ifor case insensitive
        }
      }
    try{
        const allProducts=await products.find(query)
        res.status(200).json(allProducts)
    }
    catch{
        res.status(400).json("get product api failed")
    }
}

exports.getProduct=async(req,res)=>{
    const _id=req.params.id
    try{
        const product=await products.findOne({_id})
        res.status(200).json(product)
    }
    catch{
        res.status(400).json("product api failed")
    }
}