import bcrypt from 'bcrypt'
import User from '../../models/User.js'
import jwt from 'jsonwebtoken'


// User registration
export const register = async (req, res, next) => {
    const body = req.body.body
    try {
        // encoding password
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(body.password, salt)
        console.log(body.username, body.email, hashPassword)

        const newUser = new User({
            username: body.username,
            email: body.email,
            password: hashPassword,
        })
        await newUser.save()

        res.status(200).json("user created")
    } catch (error) {
        console.log(error.message)
        res.status(401).send(error.message)
    }
}

// User login
export const login = async (req, res, next) => {
    try {
        const { body } = req.body

        if ((!body.email) && (!body.password)) {
            return res.status(404).json("need some data")
        }

        const user = await User.findOne({ "email": body.email })


        if (!user)
            return res.status(404).json({ "message": "User not found!" })

        const isPassword = await bcrypt.compare(body.password, user.password)

        if (!isPassword) {
            return res.status(400).json({ "message": "wrong password or user name" })
        }

        //creating  jwt 
        const token = jwt.sign({ id: user.id, isAdmin: user.isAdmin }, process.env.JWT_SECRET)

        const { password, isAdmin, ...others } = user._doc
        return res.status(200).json({ ...others, token })

    } catch (error) {
        console.log(error.message)
        res.status(500).json({ "message": error.message })
    }
}
// user logout 
export const logout = (req, res) => {
    req.user = ""
    return res.status(200).json("logout")
}

// check auth

export const checkAuth = async (req, res) => {
    const { username, email } = await User.findById(req.user.id)
    req.user.username = username
    req.user.email = email
    res.status(200).json({ data: req.user })
}