# Assignment-06: Core JavaScript (ES6+)

Solved solutions for Questions 1–9. Each question is in a separate JavaScript file.

## Files
- `Q1_Callback.js` — callbacks
- `Q2_HigherOrderFunction.js` — higher-order functions and array operations
- `Q3_ThisKeyword.js` — arrow functions, normal functions, and `this`
- `Q4_CarPrototype.js` — constructor functions and prototype method sharing
- `Q5_PersonStudentInheritance.js` — inheritance with constructor functions
- `Q6_PersonFacultyProfessor.js` — multi-level prototype chain
- `Q7_ClosureMultiplier.js` — closures
- `Q8_CustomMyMap.js` — custom array prototype method
- `Q9_ES6ClassesInheritance.js` — classes, `extends`, and `super`

## Run
Open a terminal in this folder and run any file with Node.js:

```bash
node Q1_Callback.js
```

Replace the filename with the question you want to test.

## Notes
- Uses core JavaScript only; no frameworks or external packages.
- Q3's arrow-function result depends on the surrounding top-level `this`. In a Node.js CommonJS file, it is normally `undefined`.
- Q8 extends `Array.prototype` as required by the assignment. Avoid modifying built-in prototypes in normal production code.
