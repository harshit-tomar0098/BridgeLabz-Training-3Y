// Q7: The returned function closes over `multiplier`.

function makeMultiplier(multiplier) {
    return function (number) {
        return number * multiplier;
    };
}

const triple = makeMultiplier(3);
const double = makeMultiplier(2);

console.log(triple(5)); // 15
console.log(triple(10)); // 30
console.log(double(5)); // 10

// Closure: the inner function remembers the multiplier value from
// the outer function's call, even after makeMultiplier has returned.
