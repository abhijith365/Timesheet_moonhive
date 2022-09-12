import express from 'express'
import { login, register } from '../controllers/user/Auth.js'
import { addTask } from '../controllers/user/Task.js'
import { userVerfi } from '../utils/tokenVerfi.js'
const route = express.Router()

route.get("/", (req, res) => res.send("this from user route"))

route.post("/login", login)

route.post("/signup", register)

route.get("/task", userVerfi, addTask)

export default route;