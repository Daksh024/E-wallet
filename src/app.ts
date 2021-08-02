import express, { Application, Request, Response, Router } from 'express';
import path from 'path';
import { dbRoute } from './routes/db';
// import bodyParser from 'body-parser';  

require ('dotenv/config');

// require('dotenv').config({path:__dirname+'/.env'});

const app :Application  = express();
const PORT :any = process.env.PORT; 

app.use(express.json()); //top parse json types
app.use(express.urlencoded({ extended: false }));

// app.use(bodyParser.json({ type: 'application/*+json' }))
 
// parse some custom thing into a Buffer
app.use(express.raw({ type: 'application/vnd.custom-type' }))
 
// parse an HTML body into a string
app.use(express.text({ type: 'text/html' }))

// set Static folder.
app.use(express.static(path.join(__dirname,'/static/templates')));

// Routing 
app.use('/db',dbRoute);

app.get('/' , ( req:Request, res:Response ) => {

    res.sendFile(path.join(__dirname,'/static/templates/spendForm.html'));
});

app.post('/', (req:Request, res:Response) => {
    console.log('POST working')
    res.send(req.body);
});

app.listen(PORT, () => console.log(`Server on port : ${PORT}`));