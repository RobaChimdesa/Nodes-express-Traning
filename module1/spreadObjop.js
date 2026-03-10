import { orderData, userData } from "./mockData.js";

// Object Spread operator

const userDataWithOrder = { ...userData, ...orderData };

export function testObjectSpread() {
    console.log("User Data with Order Data using Spread Operator");
    console.log(userDataWithOrder);
    

}

export function summation(...numbers){
    // const sum = a + b + rest.reduce((acc, curr) => acc + curr, 0);
    const sum  = numbers.reduce((a,b) => a + b, 0);
    console.log("Sum of numbers: ", sum);
}

export function multiplication(...numbers){
    const product = numbers.reduce((a,b) => a * b, 1);
    console.log("Product of numbers: ", product);
}