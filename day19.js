function sayMyName(){
    console.log("r");
    console.log("i");
    console.log("m");
    console.log("i");
}

//sayMyName()

//function addTwoNumbers(number1, number2){
    //console.log(number1 + number2);
//}

function addTwoNumbers(number1, number2){

    //let result = number1 + number2
    //return result
   return number1 + number2 
}

  const result = addTwoNumbers(3, 4)
 //console.log("result: ", result);

function loginUserMessage(username = "mim"){
    if(username === undefined){ //(!usermane)
console.log("please enter a username");
return
    }
    return `${username} just logged in`
}

//console.log(loginUserMessage("rimi"))
console.log(loginUserMessage("rimi"))