// Q5: Inheritance using constructor functions and prototypes

function Person(name) {
    this.name = name;
}

Person.prototype.showName = function () {
    console.log(`Name: ${this.name}`);
};

function Student(name, branch) {
    // Call Person's constructor to initialize the name property.
    Person.call(this, name);
    this.branch = branch;
}

// Inherit Person's prototype methods.
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.showBranch = function () {
    console.log(`Branch: ${this.branch}`);
};

const student = new Student("Aman", "Computer Science");

student.showName();
student.showBranch();

console.log(
    "Student prototype inherits from Person:",
    Person.prototype.isPrototypeOf(Student.prototype)
); // true
