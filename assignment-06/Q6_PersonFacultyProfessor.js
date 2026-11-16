// Q6: Multi-level prototype chain: Person -> Faculty -> Professor

function Person(name) {
    this.name = name;
}

Person.prototype.introduce = function () {
    console.log(`Person: ${this.name}`);
};

function Faculty(name, department) {
    Person.call(this, name);
    this.department = department;
}

Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.constructor = Faculty;

Faculty.prototype.showDepartment = function () {
    console.log(`Department: ${this.department}`);
};

function Professor(name, department, subject) {
    Faculty.call(this, name, department);
    this.subject = subject;
}

Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;

Professor.prototype.showSubject = function () {
    console.log(`Subject: ${this.subject}`);
};

const professor = new Professor(
    "Dr. Sharma",
    "Computer Science",
    "JavaScript"
);

// Professor can access methods at all levels of the chain.
professor.introduce();       // Person method
professor.showDepartment();  // Faculty method
professor.showSubject();     // Professor method

console.log(
    "Professor inherits from Faculty:",
    Faculty.prototype.isPrototypeOf(Professor.prototype)
); // true
console.log(
    "Faculty inherits from Person:",
    Person.prototype.isPrototypeOf(Faculty.prototype)
); // true
