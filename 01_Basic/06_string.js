const name = "sakshi"
const repoCount = 250

/* conasole.log(name + repoCount + "Value"); */

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName  = new String('sakshi-kanu-moti')

console.log(gameName[0]);
console.log(gameName__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStringOne = "  sakshi   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://sakshi.com/krishna%18sakshi"

console.log(url.replace('%18' , '%4'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));
