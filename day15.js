const A_name = ["rimi", "mim", "ria"]
const B_name = ["zim", "zin", "lia"]

A_name.push(B_name)

//console.log(A_name);
//console.log(A_name[4][1]);

//const allname = A_name.concat(B_name)
//console.log(A_name);

//const all_new_name = [...A_name, ...B_name]
//console.log(all_new_name);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

Array.isArray("rimi")
console.log(Array.isArray("rimi"))

console.log(Array.from("rimi"))

console.log(Array.from({name: "rimi"}))

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
