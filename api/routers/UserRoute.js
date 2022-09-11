import express from 'express'
import { login, register } from '../controllers/user/Auth.js'
const route = express.Router()

route.get("/", (req, res) => res.send("this from user route"))

route.post("/login", login)

route.post("/signup", register)

export default route;