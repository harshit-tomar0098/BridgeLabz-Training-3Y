// Q2. Employee Bonus Calculator
"use strict";

const employees = [
    { name: "Amit", salary: "45000", years: "5" },
    { name: "Sara", salary: "38000", years: "2" },
    { name: "Kiran", salary: "52000", years: "7" }
];

for (const employee of employees) {
    try {
        if (!employee || typeof employee.name !== "string" ||
            employee.salary === undefined || employee.years === undefined) {
            throw new Error("Employee record is missing required properties.");
        }

        const salary = Number(employee.salary);
        const years = Number(employee.years);

        if (!Number.isFinite(salary) || !Number.isFinite(years) || salary < 0 || years < 0) {
            throw new TypeError("Salary and years must be valid non-negative numbers.");
        }

        const bonusRate = years > 3 ? 0.10 : 0.05;
        const bonus = salary * bonusRate;
        const totalPay = salary + bonus;

        console.log(
            `${employee.name}: Salary ₹${salary.toFixed(2)}, ` +
            `Experience ${years} years, Bonus ₹${bonus.toFixed(2)}, ` +
            `Total ₹${totalPay.toFixed(2)}`
        );
    } catch (error) {
        console.error(`Could not process employee: ${error.message}`);
    }
}
