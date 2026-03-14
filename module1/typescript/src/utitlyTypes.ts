interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type PartialTodo = Partial<Todo>;     // make eve pro optional
type RequiredTodo = Required<Todo>;   // make evey pro requ
type TodoPreview = Pick<Todo, "title" | "completed">;  // pick the pro u need 
type TodoInfo = Omit<Todo, "completed" | "description">; //remove the pro u dont need 
type Status = "pending" | "active" | "inactive";  // Literal types 

//Objects 
const myTodo : Todo = { title:"Test", description:"Test", completed :true };
const optionalTodo : PartialTodo  = { title:"Test" }
const requiredVersion : RequiredTodo = { title:"Test", description:"Test", completed : true }
const prvObj : TodoPreview = { title:"Test", completed : true }
const todInfoObjs : TodoInfo = { title:"Test" }
const status : Status = "pending";


function displayData()
{
console.log("Data ..");
console.log(myTodo);
console.log(optionalTodo);
console.log(requiredVersion);
console.log(prvObj);
console.log(todInfoObjs);
console.log(status);
}