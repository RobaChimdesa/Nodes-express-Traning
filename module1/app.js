import { sum, sub, mul , div, remainder, isEven } from './mathfunces6.js'; 
// console.log("This is Node Js Training");
// console.log("This is Module 1");

const result = sum(5, 10);
const subt = sub(10, 5);
const mult = mul(5, 10);
const dive = div(10, 5);
const rem = remainder(10, 3);
const even = isEven(9);


console.log("The sum of 5 and 10 is: " + result);
console.log("The subtraction of 10 and 5 is: " + subt);
console.log("The multiplication of 5 and 10 is: " + mult);
console.log("The division of 10 and 5 is: " + dive);
console.log("The remainder of 10 and 3 is: " + rem);
console.log("even or odd: " + even);
