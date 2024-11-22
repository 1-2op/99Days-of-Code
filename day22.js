const user = {
    username: "rimi",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}

//user.welcomeMessage()

//user.username = "mim"
//user.welcomeMessage()
//console.log(this);

//function me(){
    //let username = "rimi"
    //console.log(this.username);
//}

//me()

//const rimi =  function () {
    //let username = "ria"
    //console.log(this.username)
//}


//const rimi =  () => {
    //let username = "ria"
    //console.log(this)
//}
//rimi()

//const addTwo = (num1, num2) => {

    //return num1 + num2
//}

//const addTwo = (num1, num2) => num1 + num2


const addTwo = (num1, num2) => ({username: "rimi"})



console.log(addTwo(3, 4))


const myArray = [2, 3, 4, 6]

myArray.forEach()
