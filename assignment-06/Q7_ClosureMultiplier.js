// Q7: Closure using a multiplier function

function makeMultiplier(multiplier) {
    // The returned function remembers the multiplier variable.
    return function (number) {
        return number * multiplier;
    };
}

const triple = makeMultiplier(3);
console.log(triple(5)); // 15

const double = makeMultiplier(2);
console.log(double(5)); // 10

// Closure explanation:
// The inner function keeps access to `multiplier` even after
// makeMultiplier() has finished executing.
