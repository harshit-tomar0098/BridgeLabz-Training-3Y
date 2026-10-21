// Q6. Pyramid Pattern Generator
"use strict";

// Change this value to customize the height; default is 5.
// In a browser, replace this with: Number(prompt("Enter pyramid height:", "5")) || 5
const userInput = 5;
const rows = Number.isInteger(userInput) && userInput > 0 ? userInput : 5;

for (let row = 1; row <= rows; row++) {
    let pattern = "";
    for (let column = 1; column <= row; column++) {
        pattern += "*";
        if (column < row) pattern += " ";
    }
    console.log(pattern);
}

// Debugging exercise: place a breakpoint on the outer loop and watch `row`,
// `column`, and `pattern` as execution steps through each iteration.

// `var` comparison (run separately if desired):
// for (var rowVar = 1; rowVar <= 4; rowVar++) {
//     var patternVar = "";
//     for (var colVar = 1; colVar <= rowVar; colVar++) {
//         patternVar += "* ";
//     }
//     console.log(patternVar.trim());
// }
// `var` is function-scoped, so a `var` loop variable is reused rather than
// creating a new block-scoped binding. Strict mode does not prohibit declared
// `var` variables, but it does catch assignments to undeclared variables.
