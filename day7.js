// stack (primitive ) , Heap (non-primitive)

let myYoutubename = "learnjavascript"

let anothername = myYoutubename

anothername = "afrin rimi"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"

}

let userTwo = userOne

userTwo.email = "rimi@google.com"

console.log(userOne.email);
console.log(userTwo.email);