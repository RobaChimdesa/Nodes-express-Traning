// Adding Two numbers
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

module.exports = { sum, sub, mul, div, remainder, isEven };
