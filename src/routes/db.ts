import express, { Router, Request, Response, NextFunction } from 'express';
import { connect, connection, ConnectOptions} from 'mongoose';
import { spendModel } from '../models/models';
require ('dotenv/config');

const dbRoute = Router();

//Connect DataBase
const uri :any = process.env.DBConnection;

// const app :Application  = express();

// dbRoute.use('/', (req:Request, res:Response, next:NextFunction) => {      // This middleware is used to check weather there is any query or not.

//     connect(uri, 
//         () => console.log("Database Operations!!!!")
//     );                 // Connecting to Database
    
//     if(Object.keys(req.query).length === 0){

//         spendModel.find(req.query)
//         .then(data => {
//             console.log(Object.keys(data).length);
//             res.send(data);
//         });

//         console.log("No query found!!")
//         next();
//     }
//     else{

//         const obj = ((req.query.month) == '')? {} : req.query;

//         spendModel.find(obj)
//         .then(
//             data => res.send(data)
//         );

//         const month = req.query.month;
//         console.log(`Month = ${month}`);
//         // console.log(req.query);
//         next();
//     }  
// });

dbRoute.get('/', (req:Request, res:Response ) => {

    connect(uri, () => console.log("Database Operations!!!!"));                 // Connecting to Database

    spendModel.find({})
    .then(
        data => res.send(data)
    );

    // getQuery(req.query);

    // connect(uri, () => console.log("DataBase is Connected!!"));
    // res.send("Here we will work on Database Things!!!");
});

dbRoute.post('/',express.urlencoded({ extended: false }), (req:Request,res:Response) => {

    // if(req.)

    console.log(req.body);

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