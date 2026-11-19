// Q2 – Task Scheduler: Micro vs Macro Challenge

console.log("Start");

setTimeout(() => {
    console.log("setTimeout callback (macrotask)");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise callback (microtask)");
});

console.log("Synchronous log");
console.log("End");

// Synchronous code runs first. Once the call stack is empty, JavaScript
// drains the microtask queue (Promise.then) before moving to the macrotask
// queue (setTimeout). Therefore, the Promise callback appears before setTimeout.
