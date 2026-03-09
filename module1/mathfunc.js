// Adding Two numbers
function sum(a, b) 
{
  return a + b;
}

function sub(a, b)
{
    return a - b;
}
function mul(a, b)
{
    return a * b;
}
function div(a,b){
    if(b === 0){
        return "Division by zero is not allowed.";
    }
    return a / b;
}
// reminder ->
// even odd  -> use reminder dunc

module.exports = { sum, sub, mul, div };
