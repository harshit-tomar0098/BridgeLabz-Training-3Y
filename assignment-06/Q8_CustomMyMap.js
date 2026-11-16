// Q8: Add a custom myMap() method to Array.prototype

Array.prototype.myMap = function (callback) {
    const result = [];

    for (let index = 0; index < this.length; index++) {
        // Match map(): skip empty slots in sparse arrays.
        if (index in this) {
            result[index] = callback(this[index], index, this);
        }
    }

    return result;
};

const numbers = [1, 2, 3];

const doubledNumbers = numbers.myMap(function (number) {
    return number * 2;
});

console.log(doubledNumbers); // [2, 4, 6]

// Note: In real projects, avoid changing built-in prototypes.
// This is done here only because the assignment asks for it.
