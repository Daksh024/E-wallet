import express, { Application, Request, Response, Router } from 'express';
import path from 'path';
import mongoose from 'mongoose';
import { dbRoute } from './routes/db';
// require('dotenv').config({path:__dirname+'/.env'});
require ('dotenv/config');

const app :Application  = express();
const PORT :any = process.env.PORT; 

// set Static folder.
app.use(express.static(path.join(__dirname,'static/templates')));

app.use('/db',dbRoute);

//Connect DataBase
const uri :any = process.env.DBConnection;
mongoose.connect(uri, () => console.log("DataBase is Connected!!"));

//Middleware
// app.use('/',( req:Request , res:Response, next:NextFunction ) => {
//     console.log("Middleware checking for arugments....")
//     next();
// });

// Routes
app.get('/' , ( req:Request, res:Response ) => {
    res.json({
        'First' :'Suraj',
        'Last'  :'Kamble'
    })
});

app.listen(PORT, () => console.log(`Server on port : ${PORT}`));