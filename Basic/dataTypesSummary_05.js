/* PRIMITIVE
7 Types : String , Number , Boolean, Null, Undefined, Symbol, BigInt
*/

const score = 100
const scoreValue = 100.2 // number not float and all

const isLoggedIn = false 
const outsideTemp = null   // typeof null : object  ****important for interview purpose since different
let userMail; // intial value is undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); //false

const bigNumber = 256489566657856423n //BigInt  ,  typeof : undefined 


/* NON PRIMITIVE (Reference) 
 Array, Objects, Functions 
*/

const heros = ["shaktiman" , "naagraj", "doga"];   // typeof : object 
 
let myObj = {
    name :"sakshi",
    age :22,
}  // typeof : object 

const myFunction = function(){
    console.log("Hello World");
}  // typeof : object function

console.log(typeof x); // gives the type of x
/* Javascript is a dynamically typed i.e, variable types are determined at runtime */