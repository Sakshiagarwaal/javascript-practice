let score = "20bhn"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);  // output NaN : not a number


/* 
   "33" : 33
    "20abc" : NaN
    true : 1 & false : 0
*/

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

/*
1 : true  & false : 0
"" : false
"sakshi" : true
*/

let someNumber = 20
let stringNumber = string(someNumber)
console.log(typeof stringNumber);
console.log(stringNumber);

/* operations */

let value = 3
let negValue = -value

console.log(negValue)

/*
console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2**3) //power
console.log(2/3)
console.log(2%3)
*/

let str1 = "hello"
let str2 = "sakshi"

let str3 = str1+str2
console.log(str3)

/*
console.log("1" + 2) //12
console.log(1 + "2")   //12
console.log("1" + 2 + 2)  // 122
console.log(1 + 2 + "2")  //32

console.log(3+4*5%3) 

don't write such messy codes describe with bracket which operation you want first then second and so on
*/

console.log(+true)
console.log(+"")

let num1 , num2, num3
num1 = num2 = num3 = 2+2

let gameCounter = 100
gameCounter++;
console.log(gameCounter); //101








