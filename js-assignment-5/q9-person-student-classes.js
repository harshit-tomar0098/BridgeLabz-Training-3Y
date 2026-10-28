// Q9: ES6 class inheritance using extends and super().
// This behaves like the constructor/prototype version in Q5.

class Person {
    constructor(name) {
        this.name = name;
    }

    showName() {
        console.log(`Name: ${this.name}`);
    }
}

class Student extends Person {
    constructor(name, branch) {
        super(name); // Calls Person's constructor and initializes name.
        this.branch = branch;
    }

    showBranch() {
        console.log(`Branch: ${this.branch}`);
    }
}

const student = new Student("Aarav", "Computer Science");
student.showName();
student.showBranch();

console.log(student instanceof Student); // true
console.log(student instanceof Person);  // true

// Compare with Q5: both versions inherit showName from Person and
// add branch/showBranch in Student. `extends` and `super()` provide
// cleaner syntax for the same inheritance relationship.
