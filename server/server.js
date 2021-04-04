const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const config = require('./config/configuration');
const userRouter = require('./router/userRouter');
const recepiRouter = require('./router/recepiRouter');
const auth = require('./middlewares/isAuth')


dotenv.config()

mongoose.connect(process.env.DATABASE_CONNECTION,{useCreateIndex: true, useUnifiedTopology: true,useNewUrlParser: true },console.log('Connected to DB successfully.'))

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));


const corsOptions = {
    origin: `http://localhost:3000`,
    methods: "GET,HEAD,POST,PATCH,DELETE,OPTIONS",
    credentials: true,                // required to pass
    allowedHeaders: "Content-Type, Authorization, X-Requested-With",
  }
  app.use(cors(corsOptions));
  app.use(auth)




app.use('/user',userRouter);
app.use('/recepies',recepiRouter)


app.listen(config.port,console.log('Server is listenning now....'))