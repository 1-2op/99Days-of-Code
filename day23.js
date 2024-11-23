const num = 6

if (num<10){

    console.log("less than 10")
}
else {

    console.log("greatern than 10")
}


const value = 200

if (value>100){
    let name = "rimi"
    //console.log(`user name: ${name}`);
}

//console.log(`user name: ${name}`);

const userLoggedIn = true
const debitCard = true
const userLoggedInFromGoogle = false
const userLoggedInFromEmail = true

if (userLoggedIn && debitCard){

    console.log("ok for this");
}
if (userLoggedInFromEmail || userLoggedInFromGoogle){
    console.log("application done");
}
