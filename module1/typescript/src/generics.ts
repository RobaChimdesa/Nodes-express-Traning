 interface ApiResponse { data: T; status: number; message: string; }
 
// Generic
function identity(arg: T): T 
{ 
  return arg; 
} 
const num = identity(42); 
const str = identity("hello");

// Generic with constraints
 function logLength(arg: T): T 
 { 
  console.log(arg.length); return arg; 
}

 logLength("hello");