// Primitive types

 //string 
 let name: string = "Alice"; 
 
 //number 
 let age: number = 30; 
 
 // boolean
 let isActive: boolean = false; 
 
 // Arrays
 let numbers: number[] = [1, 2, 3]; 
 let names: string[] = ["Alice", "Bob"]; 

 // Any (avoid when possible)
 let data: any = "anything"; 

 function getData()
 {
   return { id:2, name: "Abebe", age: 43}
 }
 let apiData:unknown;

 apiData = getData();

 interface person{
    id: number;
    name: string;
    age: number;
 }

 const person1 : person = {
    id: 2,
    name: "Abebe",
    age: 43
 }