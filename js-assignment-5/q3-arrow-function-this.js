// Q3: Arrow functions do not create their own `this`.
// In a normal script, the arrow inherits `this` from the surrounding scope,
// so `this.name` is not the object's `name` property.

const userWithArrow = {
    name: "John",
    showName: () => {
        console.log("Arrow function this.name:", this.name);
    }
};

userWithArrow.showName(); // Usually undefined in a Node.js CommonJS module.

const userWithNormalFunction = {
    name: "John",
    showName: function () {
        console.log("Normal function this.name:", this.name);
    }
};

userWithNormalFunction.showName(); // John

// Use a normal method/function when `this` should refer to the calling object.
