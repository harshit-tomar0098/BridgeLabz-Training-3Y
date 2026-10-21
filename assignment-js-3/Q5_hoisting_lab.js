// Q5. Hoisting Lab: The Sequence Trap
"use strict";

// Original sequence:
// console.log(score); // undefined: var declaration is hoisted and initialized to undefined.
// announce();         // Works: function declaration is hoisted with its function body.
// var score = 50;
// let status = "ready";
// startGame();        // Works after initialization.
// function startGame() { console.log(status); }
// Calling startGame before `status` is initialized would throw ReferenceError
// because `status` is in its temporal dead zone.

var score = 50;
const status = "ready";

function announce() {
    console.log("Game started");
}

function startGame() {
    console.log(status);
}

console.log(score);
announce();
startGame();

// Arrow-function comparison:
// Arrow functions assigned to const/let are not callable before initialization.
// Uncommenting `startArrowGame();` before the declaration below throws ReferenceError.
// startArrowGame();
const startArrowGame = () => {
    console.log("Game started with an arrow function");
};
startArrowGame();

// `var` declarations are hoisted; `let` and `const` are hoisted but stay
// uninitialized in the temporal dead zone until their declarations execute.
// Function declarations can be called before their source position.
