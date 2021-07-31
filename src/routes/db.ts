import express, { Router, Request, Response, NextFunction } from 'express';

const dbRoute = express.Router();

dbRoute.get('/',(req,res) => {
    res.send("Here we will work on Database Things!!!")
});

export {dbRoute};