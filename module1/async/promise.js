// How u create a promise 
// const PR = new Promise((resolve, reject) => 
// {
//   //Logic 
//   if(1>2) resolve({})
//   else reject(new Error("This is error "))

// })

const fetchData = () => 
{
return new Promise((resolve, reject) =>
{
setTimeout(() => 
{ 

 const success = true;
 if (success) { resolve({ id: 1, name: 'Alice' }); } 
 else { reject(new Error('Failed to fetch')); } 

}, 1000);

 }); 
};

// This is not sync function 
// U use then / async await
// fetchData()
// .then(data => 
//     {
//     console.log("The Data ");
//     console.log(data);
//     }
// )
// .catch(err => console.log(err.message))
// .finally(()=>console.log("This always excute"));


//How do u change this to Async await
async function AsyncExcute()
{
 try 
 {
    const dataAsync = await fetchData();
    console.log("The Data ");
    console.log(dataAsync);;
 }
 catch (err) {
    console.log(err.message);
 }
 finally
 {
   console.log("This always excute");
 }
}

//Run the aync func with await
await AsyncExcute();








