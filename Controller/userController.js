const users = require("../Models/userModel");

const jwt=require("jsonwebtoken")

exports.register = async (req, res) => {
    const { username, email, password } = req.body

    try {

        const user = await users.findOne({ email })

        if (user) {
            res.status(400).json("User already exists !!! Please Login.")
        }
        else {
            const newUser = new users({ username, email, password })

            await newUser.save()
            res.status(201).json(newUser)
        }
    }
    catch {
        res.status(400).json("Register API failed")

    }


}


exports.login = async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await users.findOne({ email, password })
        if (user) {

            // generate token

            const token=jwt.sign({uid:user._id},process.env.JWT_SECRET_KEY)
            res.status(200).json({user,token})
        }
        else {
            res.status(401).json("Email or Password is Incorrect")
        }
    }
    catch {
        res.status(400).json("Login Api Failed")
    }
}