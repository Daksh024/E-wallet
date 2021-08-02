import express, { Application, Request, Response, Router } from 'express';
import path from 'path';
import { dbRoute } from './routes/db';
// import bodyParser from 'body-parser';  

require ('dotenv/config');

// require('dotenv').config({path:__dirname+'/.env'});

const app :Application  = express();
const PORT :any = process.env.PORT; 

app.use(express.json()); //top parse json types

// set Static folder.
app.use(express.static(path.join(__dirname,'static/templates')));

// Routing 
app.use('/db',dbRoute);

app.get('/' , ( req:Request, res:Response ) => {
    res.send("Hello");
});

app.listen(PORT, () => console.log(`Server on port : ${PORT}`));