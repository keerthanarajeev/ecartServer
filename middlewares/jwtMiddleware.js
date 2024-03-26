// middleware functionn - Token verification

// middleware has 3 arguments-request,response,next.In  middleware function, compiler doesnot exit automatically from the function event if the code completely executed unlike normal function. it is stuck inside the function. so , to make the compiler out of function ,next keyword is used.

const jwt=require("jsonwebtoken")

exports.middlewareFunction=(req,res,next) => {
    console.log("________Inside Middleware_________");
    // token
    try{
        const token = req.headers['access_token'].split(" ")[1]
        //  `Bearer ${token}`
        // verify

        const jwtResponse=jwt.verify(token, process.env.JWT_SECRET_KEY)

        // store the user id payload in req payload

        req.payload= jwtResponse.uid
        next()
    }
    catch{
        res.status(401).json("Authentication Failed..! Please login Again....")
    }
}      