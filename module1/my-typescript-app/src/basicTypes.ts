const numbers : number[] = [1, 2, 3, 4]
const names : string[] = ["Alice", "Bob", "Charlie"]
const isActive : boolean = true;
const data : string | number = "Hello"; // Union type

function getData(): { id: number; name: string; age: number } {
  return { id: 1, name: "Alice", age: 30 };
}

let apidata = getData();
 interface todo {
    title: string;
    description: string;
    completed: boolean;
 }

 const mytodo : todo = {title:"Test", description:"Test", completed:true}