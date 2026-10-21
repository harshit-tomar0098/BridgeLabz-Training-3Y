// Q10. Nested Hoisting and Closures
"use strict";

function outer() {
    console.log(count); // undefined: outer's `var count` is hoisted.
    var count = 5;

    function inner() {
        console.log(count); // undefined: inner's own `var count` shadows outer count.
        var count = 10;
    }

    inner();

    // Arrow functions do not create their own `this`, `arguments`, or super scope,
    // but they still have their own local variables and hoisting rules.
    const innerArrow = () => {
        console.log(count); // Reads outer's count (5), because no inner `var count`.
        const arrowCount = 10;
        console.log(arrowCount);
    };

    innerArrow();
}

outer();

// Expected output:
// undefined
// undefined
// 5
// 10
//
// Call stack: global context -> outer() -> inner() -> return to outer()
// -> innerArrow() -> return to outer() -> return to global context.
// Put a breakpoint at each console.log and inspect Local and Scope panels
// in VS Code to see each function's separate bindings.
