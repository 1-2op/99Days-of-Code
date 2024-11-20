 function calculateCartprice(...num1){
    return num1
 }

 //console.log(calculateCartprice(200, 300, 400))

const user = {
    username: "rimi",
    prices: 200
}

function handeleObject(anyobject){
console.log(`userame is ${anyobject.username} and price is ${anyobject.price}`);
}
 //handeleObject(user)

 handeleObject({
    username: "mim",
    price: 299 
 })

 const myNewArray = [100, 300, 400]

 function returnSecondValue(getArray){
    return getArray[1]

 }

 //console.log(returnSecondValue(myNewArray));
 console.log(returnSecondValue([100, 300, 400]));