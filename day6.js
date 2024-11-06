//primitive

// 7 type : string, number, boolearn,null, undefined,symbol, BigInt


const score = 100
const scoreValue = 100.7

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id =Symbol('345')
const anotherId = Symbol('345')

console.log(id===anotherId);


//Reference (Non primitive)
//Arry , object ,function


const   name =["mita", "rita", "afrin"];
let myObj = {
    name : "Rimi",
    age: 10,
}

const myFunction = function(){
    console.log("hello world");
}

console.log(typeof scoreValue);

//name data type= object
//myfunction date type= function