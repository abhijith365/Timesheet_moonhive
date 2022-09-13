import express from 'express'
import { checkAuth, login, logout, register } from '../controllers/user/Auth.js'
import { addTask, allTasks } from '../controllers/user/Task.js'
import { userVerfi } from '../utils/tokenVerfi.js'
const route = express.Router()

// route.get("/", (req, res) => res.send("this from user route"))

route.post("/login", login)

route.post("/signup", register)

route.get('/logout', userVerfi, logout)

route.post("/task", userVerfi, addTask)

route.get("/task", userVerfi, allTasks)

route.get('/verify', userVerfi, checkAuth)

export default route;