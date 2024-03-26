const express=require('express')
const { getAllProducts, getProduct } = require('../Controller/productController')
const { register, login } = require('../Controller/userController')
const { addToWishlist, getWishlist, deleteWishlist } = require('../Controller/wishlistController')
const { middlewareFunction } = require('../middlewares/jwtMiddleware')
const { addToCart, getcart, removeCart, incrementCount, decrementCount, emptyCart } = require('../Controller/cartController')

// rout

const router=new express.Router()

router.get('/get-all-products', getAllProducts)

router.get('/get-product/:id',getProduct)

router.post('/add-new-user',register)

router.post('/login',login)

router.post('/user/add-to-wishlist',middlewareFunction,addToWishlist)

router.get('/user/get-wishlist/:userId',middlewareFunction,getWishlist)

router.delete('/user/delete-wishlist/:_id',middlewareFunction, deleteWishlist);

router.post('/user/add-to-cart',middlewareFunction,addToCart)

router.get('/user/get-cart',middlewareFunction,getcart)

router.delete('/user/remove-cart/:_id',middlewareFunction,removeCart);

router.get('/user/increment-cart/:_id',middlewareFunction,incrementCount)

router.get('/user/decrement-cart/:_id',middlewareFunction,decrementCount)

router.delete('/user/empty-cart/',middlewareFunction,emptyCart)


module.exports=router