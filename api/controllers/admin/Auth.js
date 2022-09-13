import bcrypt from 'bcrypt'
import User from '../../models/User.js'
import jwt from 'jsonwebtoken'


// User login
export const adminLogin = async (req, res, next) => {
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
        if (!user.isAdmin) {
            return res.status(401).json("not a admin")
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

// all users 

export const allUsers = async (req, res) => {
    try {
        const users = await User.find().select("-password")
        res.status(200).json(users)
    } catch (error) {
        console.log(error.message)
        res.status(500).json(error.message)
    }
}