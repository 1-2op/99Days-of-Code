const name = "rimi"
const repoCount = 30

console.log(`hello mey name is ${name} and my repo count ${repoCount}`);

const gameName = new String('rimi')

//console.log(gameName[0]);
//console.log(gameName.__proto__);

//console.log(gameName.lenght);
//console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('i'));

const newString = gameName.substring(0,3)

console.log(newString);

const anotherString = gameName.slice(-4, 2)

console.log(anotherString);