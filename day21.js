function one(){  // parant f
    const username = "rimi"

    function Two(){   // child f
        const website = "youtube"
        console.log(username);
    }

    Two()
}

//one()

if (true) {

    const username = "rimi"
    if (username === "rimi"){
        const website = " youtube"
        //console.log(username + website);
    }
}

console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5)

const addTwo = function(num){
    return num + 2
}


addTwo(5)