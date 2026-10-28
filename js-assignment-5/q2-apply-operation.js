// Q2: Pass different callback operations to one reusable function.

function applyOperation(numbers, operation) {
    return numbers.map(operation);
}

const numbers = [1, 2, 3, 4];

const doubledNumbers = applyOperation(numbers, number => number * 2);
const squaredNumbers = applyOperation(numbers, number => number ** 2);

console.log("Doubled:", doubledNumbers); // [2, 4, 6, 8]
console.log("Squared:", squaredNumbers); // [1, 4, 9, 16]
