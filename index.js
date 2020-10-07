const express = require('express');
const app=express();
const mongoose = require('mongoose');

//import routes
const authroute = require('./routes/auth');

//connect to db
mongoose.connect('mongodb+srv://aishwaryavasukannakumar:aish@2000@cluster0.cdjiv.mongodb.net/<dbname>?retryWrites=true&w=majority',
{useNewUrlParser: true},
() => console.log('connected to db'));

//middleware
app.use(express.json());


//route middlewares
app.use('/api/user',authroute);


app.listen(3000,() => console.log('server up'));
