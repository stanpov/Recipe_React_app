const express = require('express');
const app = express()
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const config = require('./config/configuration');
const userRouter = require('./router/userRouter')
const recepiRouter = require('./router/recepiRouter')

dotenv.config()

mongoose.connect(process.env.DATABASE_CONNECTION,{useCreateIndex: true, useUnifiedTopology: true,useNewUrlParser: true },console.log('Connected to DB successfully.'))

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors());



app.use('/user',userRouter);
app.use('/recepies',recepiRouter)

app.listen(config.port,console.log('Server is listenning now....'))