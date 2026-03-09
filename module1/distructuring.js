import { listOfItems } from "./mockData.js";

// assign them without destructeing
// const apple = listOfItems[0];
// const orange = listOfItems[1];
// const banana = listOfItems[2];

// with disctructering
const [apple, orange, banana,x] = listOfItems;
// it assign the value by using the index of the array.



export function testDestructuringArray()

{
    console.log("The first item is: " + apple);
    console.log("The second item is: " + orange);
    console.log("The third item is: " + banana);
    console.log("The fourth item is: " + x);
}