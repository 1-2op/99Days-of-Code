// singleton

// 0bject literals

const mySym =Symbol("key1")

const JsUser = {
    name: "rimi",
    "full name": "afrin jahan" ,
    [mySym]: "mykey1",
    age: 20,
    email: "rimi12@mail.com",
    isLoggedIn: false,
    lastLoginDays:["Sunday","Monday"]
    }

//console.log(JsUser.email)
//console.log(JsUser["email"])
//console.log(JsUser["full name"])
//console.log(JsUser[mySym])

JsUser.email = "rimi876@mail.com"
//Object.freeze(JsUser)
JsUser.email = "rimime00@mail.com"
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello user");
}
JsUser.greetingTwo = function(){
    console.log(`hello user,${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());