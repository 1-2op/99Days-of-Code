//const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Samny"
tinderUser.isLoggedIn = false


 //console.log(tinderUser);

 const regularUser = {
    email: "rimi87@gmail.com",
    fullname: {
        Userfullname: {
            firstname: "afrin",
            Lastname: "rimi"
        }
    }
 }

 //console.log(regularUser.fullname.Userfullname)


 const obj1 = {1: "a", 2: "b"}
 const obj2 = {3: "a", 4: "b"}
 //const obj3 = { obj1, obj2 }
//const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}
 //console.log(obj3);


 const user =[
    {
        id: 1,
        email: "mim98@.com"
    },
    {
        id: 1,
        email: "mim98@.com"

    },
    {
        id: 1,
        email: "mim98@.com"
    },
 ]

user[1].email


console.log(tinderUser);


console.log(Object.keys(tinderUser));