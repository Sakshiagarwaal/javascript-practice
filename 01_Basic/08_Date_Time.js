// Dates

let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());

console.log(typeof myDate);

// let myCreatedDate = new Date(2024, 0, 3);
// let myCreatedDate = new Date(2024, 0, 3,5,4);   // 3/1/2024, 5:04:00 am
let myCreatedDate = new Date("2024-01-3");     //3/1/2024, 12:00:00 am
// let myCreatedDate = new Date("01-13-2024"); 

console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));  // converts milli seconds to seconds


let newDate = new Date()

console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

// `${newDate.getDay()} and the time is`  

newDate.toLocaleString('default',{
    weekday: 'long',
    
})