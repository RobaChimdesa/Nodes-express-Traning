interface User {
    id:number;
    name: string;
    email:string;
}


async function getUsers(): Promise<User[]>{
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve([
              { id:1,name:'roba', email:"roba@had"},
              { id:2, name: 'fdfd',email:'dhhdfdh' }
            ])
        }, 1000)
    })

}

async function  main(){
    const users = await getUsers();
    console.log(users);
 }

main();

interface ApiResponse<T> {
  success: boolean;
  data: T;
  error?: string;
}

async function getUserById(id: number): Promise<ApiResponse<User>> {
  const users: User[] = [
    { id: 1, name: "Alice", email: "alice@gmail.com" },
    { id: 2, name: "Bob", email: "bob@gmail.com" }
  ];

  const user = users.find(u => u.id === id);

  if (!user) {
    return {
      success: false,
      data: null as any,
      error: "User not found"
    };
  }

  return {
    success: true,
    data: user
  };
}

async function test(id:number) {
  const result = await getUserById(id);
  console.log(result);
}

test(3);

async function fetchUsers(): Promise<User[]> {

  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  const data: User[] = await response.json();

  return data;
}

async function main2() {
  const users = await fetchUsers();

  users.forEach(user => {
    console.log(user.name);
  });
}

main2();