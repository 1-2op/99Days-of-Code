// nullidh coalescing operator(??): null undefined


let val1;
//val1 = 5 ?? 10

//val1 = null ?? 10
//val1 = undefined ?? 10
 
val1 = null ?? 10 ?? 15

console.log(val1);

// terniary operatior 
 
//conditon ? true : false

const handBagPrice = 500

handBagPrice <=200 ? console.log("less than 200") : console.log
("more than 200")