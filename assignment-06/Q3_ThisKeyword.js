// Q3: Arrow function vs normal function and the value of `this`

const user = {
    name: "Buddy",

    // Arrow functions do not get their own `this`.
    showName: () => {
        console.log("Arrow function:", this.name);
    }
};

user.showName(); // In a Node.js file, this.name is usually undefined.

// Fix: use a normal method so `this` refers to the object calling it.
user.showName = function () {
    console.log("Normal function:", this.name);
};

user.showName(); // Buddy

// Explanation:
// An arrow function takes `this` from its surrounding scope.
// A normal function gets `this` from how it is called.
// Here, user.showName() makes `this` refer to user.
