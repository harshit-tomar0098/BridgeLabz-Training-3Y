// Q4 – Employee Inheritance

class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    work() {
        console.log(`${this.name} is working in ${this.department}.`);
    }
}

class Manager extends Employee {
    constructor(name, department) {
        super(name, department);
    }

    // Overrides Employee's work() method.
    work() {
        console.log(`${this.name} is managing the ${this.department} team.`);
    }
}

const employee = new Employee("Amit", "Development");
const manager = new Manager("Neha", "Development");

// Runtime polymorphism: same method name, different behavior based on object.
employee.work();
manager.work();
