// Q8. Employee Salary Projection
// Project salary for five years with a fixed annual increment.
const currentSalary = 50000;
const annualIncrementRate = 8; // Percentage

let salary = currentSalary;
const projection = [];

for (let year = 1; year <= 5; year++) {
    salary *= 1 + annualIncrementRate / 100; // Compound yearly increment.
    salary = Math.round(salary);
    projection.push({
        Year: year,
        Salary: salary,
        "Increment Rate": `${annualIncrementRate}%`
    });
}

console.table(projection);
