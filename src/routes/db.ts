import express, { Router, Request, Response, NextFunction } from 'express';
import { connect, connection, ConnectOptions} from 'mongoose';
import { spendModel } from '../models/models';
require ('dotenv/config');

const dbRoute = Router();

//Connect DataBase
const uri :any = process.env.DBConnection;

// const app :Application  = express();

dbRoute.use('/', (req:Request, res:Response, next:NextFunction) => {

    if(Object.keys(req.query).length === 0){
        next();
    }
    else{
        const month = req.query.month;
        console.log(`Month = ${month}`);
        next();
    }  
});

dbRoute.get('/', (req:Request, res:Response ) => {

    // getQuery(req.query);

    // connect(uri, () => console.log("DataBase is Connected!!"));
    res.send("Here we will work on Database Things!!!");
});

dbRoute.post('/', (req:Request,res:Response) => {
    // const option:ConnectOptions = { useNewUrlParser: true };
    connect(uri, () => console.log("Database Operations!!!!"));     // Connection Database MoneySpend directly
    connection                                                      // Is to check wheather we are connected or we have some issuse about it.
    .once('open', () => console.log("Checking"))                    // If connected and give this response
    .on('error', (err) => {
        console.log(`Error => ${err}`)
    });

    const post = new spendModel({                                   // We write the object with given request and sending it to the database to get stored.
        "month" : req.body.month,
        "year" : req.body.year,
        "spendOn" : req.body.spendOn,
        "amount" : req.body.amount,
        "currency" : req.body.currency,
        "date" : req.body.date 
    });

    post.save()                                                     // .save() is used to write the request object inside the database, it is a promise function so we can do .then()
    .then(data => {
        res.json(data);
    })
    .catch(err => console.log(err));

    // console.log(req.body);
    // res.end();
} );

export {dbRoute};