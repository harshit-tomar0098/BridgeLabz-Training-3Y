// Q8. Strict Mode Showdown
"use strict";

// In strict mode, duplicate parameter names in a normal function are a
// SyntaxError, so the original function cannot run at all.
// Assignment to undeclared `total` would throw ReferenceError.
// `delete total` is illegal for an unqualified identifier in strict mode.

// Correct ES6 version:
function demo(first, second) {
    const total = first + second;
    console.log(`First: ${first}, Second: ${second}, Total: ${total}`);
    return total;
}

demo(5, 10);

// To compare sloppy mode, create a separate non-strict script file and run it
// independently. A file that starts with "use strict" cannot turn strict mode off.
// In sloppy mode duplicate parameters are permitted in ordinary functions,
// and assigning an undeclared identifier may create a global property in some
// environments; deleting an identifier still is not a sound way to manage data.
