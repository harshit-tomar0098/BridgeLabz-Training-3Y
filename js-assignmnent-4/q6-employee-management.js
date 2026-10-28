// Q6: Employee Management System (Classes + Object Methods)

class Employee {
    constructor(id, name, department, salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary; // Monthly salary
    }

    getAnnualSalary() {
        return this.salary * 12;
    }

    applyBonus(percent) {
        if (percent < 0) {
            throw new Error("Bonus percentage cannot be negative.");
        }
        this.salary = Number((this.salary * (1 + percent / 100)).toFixed(2));
    }

    getDetails() {
        return `${this.name} (${this.department}) - Annual salary: ₹${this.getAnnualSalary().toFixed(2)}`;
    }
}

const employees = [
    new Employee(1, "Aarav", "Engineering", 65000),
    new Employee(2, "Meera", "Marketing", 52000),
    new Employee(3, "Kabir", "Finance", 58000),
    new Employee(4, "Anaya", "Human Resources", 48000),
    new Employee(5, "Ishaan", "Engineering", 72000)
];

employees[0].applyBonus(10);

console.log("Annual salaries:");
employees.forEach(employee => console.log(employee.getDetails()));

const totalAnnualPayout = employees.reduce(
    (total, employee) => total + employee.getAnnualSalary(),
    0
);

console.log(`\\nTotal annual payout: ₹${totalAnnualPayout.toFixed(2)}`);
