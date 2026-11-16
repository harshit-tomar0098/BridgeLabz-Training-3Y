// Q9: Person -> Student inheritance using ES6 classes

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
        super(name); // Calls the Person constructor.
        this.branch = branch;
    }

    showBranch() {
        console.log(`Branch: ${this.branch}`);
    }
}

const student = new Student("Aman", "Computer Science");

student.showName();
student.showBranch();

// The class version uses the same prototype-based inheritance
// mechanism as the constructor-function version in Q5.
console.log(
    "Student inherits from Person:",
    Person.prototype.isPrototypeOf(Student.prototype)
); // true
