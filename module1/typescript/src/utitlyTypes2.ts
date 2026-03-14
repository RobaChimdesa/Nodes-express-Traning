interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

interface OtherInfo {
   createAt : string;
}

type ID = string | number;
type Status = "pending" | "active" | "inactive";  // Literal types 
type FullToDO = Todo & OtherInfo;

//Objects 
const status : Status = "pending";
const myId : ID = 12;
const fullTodo : FullToDO =
  {
   title:"test", 
   description:"test", 
   completed:true, 
   createAt:"12 May" 
   }

function displayData()
{
console.log("Data ..");
console.log(status);
}