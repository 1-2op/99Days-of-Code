const coding = ["js", "ruby", "java", "python", "cpp"]

const value = coding.forEach(  (item) => {
    console.log(item);
    return item
} )

console.log(value);

const myNums = [1, 2, 3, 4, 5, 6]

const newNum = myNums.filter(  (num) => {
    num > 4
})

console.log(newNum);