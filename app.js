const express = require('express');
const app = express();
const mongoose = require('mongoose')
const logger = require('morgan');
const bodyParser = require('body-parser')
const MainRoutes = require('./routes/main')
//Database Connection
require('./config/db')();

// MiddleWares
app.use(logger('dev'))
app.use(bodyParser.json());

//Routes 
app.use(MainRoutes)

// Error Catching 
app.use((req,res,next)=>{
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
})
// Error handler 
app.use((err,req,res,next)=>{
    const error = app.get('env')==='development' ? err: {};
    const status = err.status || 500 
    res.status(status).json({
        error:{
            message:error.message
        }
    })
    console.log(err);
})

// Start server 
app.listen(3000,()=>console.log('Listening on port 3000'))