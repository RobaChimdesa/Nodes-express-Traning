import { listNumbersOne,listNumbersTwo } from "./mockData.js";

// Array Spread operator

const listofNumbers = [...listNumbersOne,...listNumbersTwo];

export function testSpread() {
    console.log("list of numbers with spread operator");
    console.log(listofNumbers);
}