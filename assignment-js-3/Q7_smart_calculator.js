// Q7. Smart Calculator
"use strict";

class InvalidOperationError extends Error {
    constructor(operation) {
        super(`Unsupported operation: ${operation}`);
        this.name = "InvalidOperationError";
    }
}
class DivisionByZeroError extends Error {
    constructor() {
        super("Cannot divide by zero.");
        this.name = "DivisionByZeroError";
    }
}
class NegativeRootError extends Error {
    constructor() {
        super("Cannot calculate a real square root of a negative number.");
        this.name = "NegativeRootError";
    }
}

const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25;
const num2 = 0;

function calculate(operation, first, second) {
    switch (operation) {
        case "add":
            return first + second;
        case "divide":
            if (second === 0) throw new DivisionByZeroError();
            return first / second;
        case "power":
            return Math.pow(first, second);
        case "root":
            if (first < 0) throw new NegativeRootError();
            return Math.sqrt(first);
        case "subtract":
            return first - second;
        default:
            throw new InvalidOperationError(operation);
    }
}

console.log("Smart Calculator Summary");
console.log(`Inputs: ${num1} and ${num2}`);

for (const operation of operations) {
    try {
        // For root, the first input is used; other operations use both inputs.
        const result = operation === "root"
            ? calculate(operation, num1)
            : calculate(operation, num1, num2);
        console.log(`${operation}: ${result}`);
    } catch (error) {
        console.error(`${operation}: ${error.name} — ${error.message}`);
    }
}

// Example invalid operation test:
// try { calculate("modulus", num1, num2); }
// catch (error) { console.error(`${error.name}: ${error.message}`); }
