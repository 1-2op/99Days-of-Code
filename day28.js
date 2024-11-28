const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num)
    
}

const greeting = "Hello world" 
for (const greet of greeting) {
    //console.log(`each char is ${greet}`)
    
}

// maps

const map = new Map()
map.set('BD',"Bangladesh")
map.set('USA',"United States of America")
map.set('Fr',"France")

//console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);    
}