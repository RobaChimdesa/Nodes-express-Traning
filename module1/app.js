const math = require('./mathfunc'); 
// console.log("This is Node Js Training");
// console.log("This is Module 1");

const result = math.sum(5, 10);
const subt = math.sub(10, 5);
const mul = math.mul(5, 10);
const div = math.div(10, 5);

console.log("The sum of 5 and 10 is: " + result);
console.log("The subtraction of 10 and 5 is: " + subt);
console.log("The multiplication of 5 and 10 is: " + mul);
console.log("The division of 10 and 5 is: " + div);
