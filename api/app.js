import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'
import { connect } from './config/db.js'

const app = express()

// 
import userRoute from "./routers/UserRoute.js"
import adminRoute from './routers/AdminRoute.js'

//config middleware
dotenv.config({ path: './config/config.env' })
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(cookieParser())

// database connection
connect()

// dev middleware
if (process.env.NODE_ENV === "DEV") {
    app.use(morgan('dev'))
}

//routes
// user route
app.use("/api/user", userRoute)
// admin route
app.use("/api/admin", adminRoute)

app.use("*", (req, res) => res.send("page not found"))


app.listen(5678, () => { console.log(`server running on port 5678...`) })