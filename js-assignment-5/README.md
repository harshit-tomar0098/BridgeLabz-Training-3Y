# JavaScript Assignment 5

Solutions for Questions 1–9 using core JavaScript (ES6+) only.

## Run the programs

Open a terminal in this folder and run each file with Node.js:

```bash
node q1-callback-greet.js
node q2-apply-operation.js
node q3-arrow-function-this.js
node q4-car-prototype.js
node q5-person-student-prototype.js
node q6-person-faculty-professor.js
node q7-closure-multiplier.js
node q8-array-my-map.js
node q9-person-student-classes.js
```

## Main concepts
1. Callbacks and execution order
2. Higher-order functions and array transformations
3. Arrow-function `this` vs normal-function `this`
4. Constructor functions and prototype method sharing
5. Prototype inheritance
6. Multi-level prototype chains
7. Closures
8. Custom array mapping method
9. ES6 class inheritance with `extends` and `super()`

## Push to the existing `js-practice` branch

From the root of your Git repository, copy this `js-assignment-5` folder into the repository. Your current branch in the previous troubleshooting was named `js-practice` (with a hyphen).

Check the branch and working tree:

```bash
git branch
git status
```

Switch to the branch if needed:

```bash
git switch js-practice
```

Stage only this assignment, commit, and push:

```bash
git add js-assignment-5
git commit -m "Add JavaScript assignment 5 solutions"
git push -u origin js-practice
```

If the folder has a different name or is not inside the repository root, correct its location before running `git add`. Do not use `git add .` if you have unrelated changes.
