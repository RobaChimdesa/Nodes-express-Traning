// Adding Two numbers
export function sum(a, b) {
  return a + b;
}

export function sub(a, b) {
  return a - b;
}
export function mul(a, b) {
  return a * b;
}
export function div(a, b) {
  if (b === 0) {
    return "Division by zero is not allowed.";
  }
  return a / b;
}
// reminder ->
export function remainder(a, b) {
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

export function isEven(a){
    if (a % 2 === 0) {
        return "The number is even.";}
    else {
        return "The number is odd.";
    }
}

export default { sum, sub, mul, div, remainder, isEven };
