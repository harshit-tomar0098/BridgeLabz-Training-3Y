// Q8: Implement a simple custom version of Array.prototype.map.
// This version handles sparse arrays and supports the callback's index and array arguments.

if (!Array.prototype.myMap) {
    Object.defineProperty(Array.prototype, "myMap", {
        value: function (callback, thisArg) {
            if (this == null) {
                throw new TypeError("myMap called on null or undefined");
            }
            if (typeof callback !== "function") {
                throw new TypeError("Callback must be a function");
            }

            const source = Object(this);
            const length = source.length >>> 0;
            const result = new Array(length);

            for (let index = 0; index < length; index++) {
                if (index in source) {
                    result[index] = callback.call(
                        thisArg,
                        source[index],
                        index,
                        source
                    );
                }
            }

            return result;
        },
        writable: true,
        configurable: true
    });
}

console.log([1, 2, 3].myMap(number => number * 2)); // [2, 4, 6]
console.log([1, 2, 3, 4].myMap((number, index) => number + index)); // [1, 3, 5, 7]
