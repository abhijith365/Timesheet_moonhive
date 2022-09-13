import jwt from 'jsonwebtoken'

export const verfiToken = (req, res, next) => {
    const token = req.headers.authorization
    // const token = req.cookie?.access_token

    if (!token) return res.status(401).json({ "message": "Not authenticated" })

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.status(404).json({ "message": "Token not valid" })
        req.user = user
        next()
    })
}

// user varfiy
export const userVerfi = (req, res, next) => {

    verfiToken(req, res, next, () => {

        const userId = req.user.id
        const isAdmin = req.user.isAdmin

        if (userId || isAdmin) {
            next()
        } else {
            return res.status(403).json({ "message": "Your not authorized" })
        }
    })
}

// admin verify 
export const adminVerfi = (req, res, next) => {
    verfiToken(req, res, next, () => {
        try {
            const isAdmin = req.user.isAdmin
            if (isAdmin) {
                next()
            } else {
                return res.status(403).json({ "message": "Your not authorized" })
            }
        } catch (error) {
            console.log(error)
        }
    })
}