console.log("Hello World!!!");

let variable:any = 24;

variable = "Suraj"


//interface is used to make shape of an object

/*
    This interface will give error on the object where there is more than given variable inside the object

interface Person{
    first: string,
    last: string,
}*/

interface Person{
    first : string;
    last : string;
    [key : string]: any; // here first and last name are require but the third property is optional. 
}

const p1 : Person = {
    first:"Suraj",
    last:"Kamble"
}

const p2 : Person = {
    first:"Daksh",
    last:"Kamble",
    alis:"CapDuck"
}


//  FUNCTIONS

function add ( x :number , y: number ) { // We can provide type to the return value also
    return (x + y) ;
}

add( 2 , 6 );


type myList = [number? , string?, boolean?] // ? is to have optional

const arr : myList = [];

arr.push(234)
arr.push("Suraj")


//Middleware
// app.use('/',( req:Request , res:Response, next:NextFunction ) => {
//     console.log("Middleware checking for arugments....")
//     next();
// });
