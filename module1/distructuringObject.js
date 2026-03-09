import { listOfItems, userData } from "./mockData.js";

// assign them without destructeing
// const fistname = userData.firstName;
// const lastName = userData.lastName;
// const age = userData.age;

// with disctructering
// const [apple, orange, banana] = listOfItems;

const { firstName:userFirstName, lastName, age } = userData;
// it access by using the key .

export function testDestructuringObject()

{
    console.log("The first name is: " + userFirstName);
    console.log("The last name is: " + lastName);
    console.log("The age is: " + age);
   
} 