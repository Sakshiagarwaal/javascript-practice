/*Array */

const myArr  = [0, 1, 2, 3, 4, 5]
const myHeros = ["shaktiman","naagraj"]

const myArr2 = new Array(1, 2, 3, 4)

console.log(myArr[0]);


/*ARRAY METHODS*/

myArr.push(6)
myArr.push(6)
myArr.pop()

myArr.unshift(9)
myArr.shift()

console.log(myArr.includes(9));
console.log(myArr.indexOf(9));

const newArr = myArr.join()

console.log(myArr);
console.log(newArr); // type of the array is string type

/*SLICE AND SPLICE*/

console.log("A",myArr);
console.log(myArr);