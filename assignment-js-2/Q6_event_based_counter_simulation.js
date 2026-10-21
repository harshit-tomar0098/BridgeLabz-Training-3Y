// Q6. Event-Based Counter Simulation

let count = 0;

function increment() {
    count++;
    console.log(`Count after increment: ${count}`);
}

function decrement() {
    count--;
    console.log(`Count after decrement: ${count}`);
}

// A nested function can access and update `count` from the outer scope.
function runNestedCounterDemo() {
    function addTwo() {
        count += 2;
        console.log(`Count after nested addTwo(): ${count}`);
    }

    addTwo();
}

console.log(`Starting count: ${count}`);
increment(); // Simulated increment click
increment(); // Simulated increment click
decrement(); // Simulated decrement click
runNestedCounterDemo();
console.log(`Final count: ${count}`);
