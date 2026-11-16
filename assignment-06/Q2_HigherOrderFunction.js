// Q2: Pass callback operations to a higher-order function

function applyOperation(numbers, operation) {
    return numbers.map(operation);
}

const numbers = [1, 2, 3, 4];

// Double each number.
const doubledNumbers = applyOperation(numbers, function (number) {
    return number * 2;
});

// Square each number.
const squaredNumbers = applyOperation(numbers, function (number) {
    return number * number;
});

console.log("Doubled:", doubledNumbers);
console.log("Squared:", squaredNumbers);
