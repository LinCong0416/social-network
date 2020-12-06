const jwt = require('jsonwebtoken')
require('dotenv').config()
const User = require('../models/user')


exports.signup = async (req,res) => {
    const userExists = await User.findOne({email:req.body.email})
    if (userExists) return res.status(403).json({
        error: "Email is taken!"
    })
    const user = await new User(req.body)
    await user.save()
    res.status(200).json({ message:"Signup successful login please!" });
};

exports.signin = (req, res) => {
    // find the user base on email
    const {_id, name, email, password} = req.body
    User.findOne({email}, (err, user) => {
        //if err or no user
        if (err || !user) {
            return res.status(401).json({
                err: "User with that email does not exist, plean signin."
            })
        }
        // if user is found make sure the email and password are matched
        //create authenticate method in model
        if (!user.authenticate(password)) {
            return res.status(401).json({
                err: "Email and password do not match."
            })
        }
        //generate the token with user id and secret
        const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET)
        //presist the token as 't' in cookie with expiry date
        res.cookie("t", token, {expire: new Date() + 9999})
        // return response with user and token to frontend client
        const {_id, name, email} = user
        return res.json({token, user:{_id, email, name}})

    })
}

exports.signout = (req, res) => {
    res.clearCookie("t")
    return res.json({message: "Signout success!"});
}