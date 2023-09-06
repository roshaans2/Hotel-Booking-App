const express = require("express")

const app = express()

const cookieParser = require("cookie-parser")

app.use(express.json())

app.use(cookieParser())

require('dotenv').config()

const dotenv = require('dotenv')
const mongoose = require('mongoose')

// const MONGO_URI = "mongodb+srv://Roshaan:roshaan@roshaan.lwu23.mongodb.net/booking-app"
const MONGO_URI = process.env.MONGO_URI

const authRouter = require("./routes/auth.js")
const hotelsRouter = require("./routes/hotels.js")
const roomsRouter = require("./routes/rooms.js")
const usersRouter = require("./routes/users.js")


const connect = async ()=>{
    try {
      await mongoose.connect(MONGO_URI)
      console.log("Connected to the DB")
    } catch (error) {
      console.log(error)
    }
  }

app.use("/api/auth",authRouter);
app.use("/api/hotels",hotelsRouter)
app.use("/api/rooms",roomsRouter)
app.use("/api/users",usersRouter)

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500
  const errorMessage = err.message || "Something went wrong"
  return res.status(errorStatus).json({
    success:false,
    status:errorStatus,
    message:errorMessage
  });
});



app.listen(8080,()=>{
    connect()
    console.log("Connected to Backend!")
})