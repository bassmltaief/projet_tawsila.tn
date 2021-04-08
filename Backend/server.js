const express=require('express')
const connectDB = require('./config/connectDB')
const app=express()
const authRouter=require('./routes/authRouter')
const annRouter=require('./routes/annanceRouter')
const adminControls = require("./routes/admin")



app.use(express.json())
app.use('/api/auth',authRouter)
app.use("/api",annRouter)
app.use("/api/admin",adminControls)

//3 set up the env variables 

require('dotenv').config({path:'./config/.env'})

//2 connect BD
connectDB()


// 1 start the server
const PORT=process.env.PORT || 5000
app.listen(PORT,err=>err?console.error(err):
console.log(`the server is running on port ${PORT}`))