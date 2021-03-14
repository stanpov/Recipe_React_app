const express = require('express');
const app = express()
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const config = require('./config/configuration');
const userController = require('./router/userRouter')
dotenv.config()

mongoose.connect(process.env.DATABASE_CONNECTION,{useCreateIndex: true, useUnifiedTopology: true,useNewUrlParser: true },console.log('Connected to DB successfully.'))

app.use(express.json({extended:true}))
app.use(cors())

app.use('/user',userController)

app.listen(config.port,console.log('Server is listenning now....'))