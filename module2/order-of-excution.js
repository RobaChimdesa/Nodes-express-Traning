// event-loop-demo.js
console.log('1. Start'); 
setTimeout(() => { console.log('1. setTimeout'); }, 13); 
setTimeout(() => { console.log('2. setTimeout'); }, 11); 
setTimeout(() => { console.log('3. setTimeout'); }, 10); 
setTimeout(() => { console.log('4. setTimeout'); }, 12); 

// setTimeout(() => console.log('2. setTimeout'));
setImmediate(() => { console.log('3. setImmediate'); }); 
Promise.resolve().then(() => { console.log('5. Promise'); }); 
process.nextTick(() => { console.log('5. nextTick'); }); 
Promise.resolve().then(() => { console.log('4. Promise'); }); 

console.log('6. End');

