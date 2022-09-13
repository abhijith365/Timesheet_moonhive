import express from 'express'
import { adminLogin, allUsers } from '../controllers/admin/Auth.js'
import { allTask } from '../controllers/admin/Task.js'
import { checkAuth } from '../controllers/user/Auth.js'
import { adminVerfi } from '../utils/tokenVerfi.js'
const route = express.Router()

route.post('/login', adminLogin)
route.get('/verify', adminVerfi, checkAuth)
route.get('/allTasks', adminVerfi, allTask)
route.get('/allUsers', adminVerfi, allUsers)


export default route