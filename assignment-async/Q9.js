// Q9 – Debugging the Event Loop

// Predicted output:
// Script start
// Script end
// Promise callback
// Timeout callback

console.log("Script start");

setTimeout(() => {
    console.log("Timeout callback");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise callback");
});

console.log("Script end");

// Explanation:
// 1. The two direct console.log() calls run synchronously.
// 2. Promise.then() queues a microtask.
// 3. setTimeout() queues a macrotask (timer task), even with a 0 ms delay.
// 4. After synchronous code finishes, JavaScript runs queued microtasks
//    before taking the next macrotask. Therefore, Promise callback runs first.
