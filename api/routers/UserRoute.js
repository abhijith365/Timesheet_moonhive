import express from 'express'
const route = express.Router()

route.get("/", (req, res) => res.send("this from user route"))

route.get("/login")

route.get("/signup")

export default route;