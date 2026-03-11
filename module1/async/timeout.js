
const timeout = 1000;
function callback()
{
    console.log("This is SetTime Out");
    console.log("Tesing ....");
}

//SetTimeOut
setTimeout((callback), timeout);

setTimeout(() => {
     console.log("This is arrow function with setimeout")
}, 2000);

console.log("This is console , will it print first ?? ");

const mypromise = new Promise((resolve, reject) =>{
    const rand = Math.floor(Math.random() * 2);
    if(rand === 0) resolve("This is resolved");
    else reject(new Error("This is rejected"));}
);

mypromise.then(() => console.log("Promise resolved"))
.catch(err => console.log(err.message));