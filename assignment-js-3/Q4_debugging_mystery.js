// Q4. Debugging Mystery
"use strict";

// Original code fails because `greeting` has not been declared.
// In strict mode, assigning to an undeclared identifier throws ReferenceError.

// Fixed version:
function showMessage() {
    const greeting = "Welcome";
    debugger; // Watch `greeting`; inspect the call stack in VS Code.
    console.log(greeting);
}

showMessage();

// Scope note: `const` creates a local binding inside showMessage().
// It does not create or modify a global variable.
