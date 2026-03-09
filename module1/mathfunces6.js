// Adding Two numbers
import {testConstatnt} from './constant.js'
function sum(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}
function mul(a, b) {
  return a * b;
}
function div(a, b) {
  if (b === 0) {
    return "Division by zero is not allowed.";
  }
  return a / b;
}
// reminder ->
function remainder(a, b) {
  if (b === 0) {
    return "Division by zero is not allowed.";
  }
  return a % b;
}
// even odd  -> use reminder dunc

// function isEven(remainder) {
//   if (remainder === 0) {
//     return "The number is even.";
//   }
// }

function isEven(a){
    if (a % 2 === 0) {
        return "The number is even.";}
    else {
        return "The number is odd.";
    }
}

export function testfunctions(){
    console.log("The sum of 5 and 10 is: " + sum(5, 10));
    console.log("The subtraction of 10 and 5 is: " + sub(10, 5));
    console.log("The multiplication of 5 and 10 is: " + mul(5, 10));
    console.log("The division of 10 and 5 is: " + div(10, 5));
    console.log("The remainder of 10 and 3 is: " + remainder(10, 3));
    console.log("even or odd: " + isEven(9));

}