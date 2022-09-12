import bcrypt from 'bcrypt'
import User from '../../models/User.js'
import jwt from 'jsonwebtoken'


// User registration
export const register = async (req, res, next) => {
    try {
        // encoding password
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(req.body.password, salt)


        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashPassword,
        })
        await newUser.save()

        res.status(200).json(newUser)
    } catch (error) {
        next(error)
    }
}

// User login

export const login = async (req, res, next) => {
    try {
        const { body } = req.body
        const user = await User.findOne({ "email": body.email })
        console.log(body, req.body)

        if (!user)
            return res.status(404).json({ "message": "User not found!" })

        const isPassword = bcrypt.compare(body.password, user.password)

        if (!isPassword)
            return res.status(400).json({ "message": "wrong password or user name" })

        //creating  jwt 
        const token = jwt.sign({ id: user.id, isAdmin: user.isAdmin }, process.env.JWT_SECRET)

        const { password, isAdmin, ...others } = user._doc
        res.cookie("access_token", token, {
            httpOnly: true,
        }).status(200).json({ ...others })

    } catch (error) {
        res.status(500).json({ "message": error.message })
    }
}