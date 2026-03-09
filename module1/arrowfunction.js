// Add ,....

const addArroFun = (a, b) => a + b;

const subArroFun = (a, b) => a - b;
const mulArroFun = (a, b) => a * b;
const divArroFun = (a, b) => a / b;

// test these functions 
export const  testFunctions = () => 
{
  console.log("addition by arrow:", addArroFun(5, 3)); // Output: 8
  console.log("subtraction by arrow:", subArroFun(5, 3));
  console.log("multiplication by arrow:", mulArroFun(5, 3));
  console.log("division by arrow:", divArroFun(5, 3));
}
