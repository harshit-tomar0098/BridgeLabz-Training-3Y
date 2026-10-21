// Q1. Scope Conflict Resolver
// `bonus` is global. `salary` and `isPermanent` are local to calculateSalary().

let bonus = 5000;

function calculateSalary(permanentStatus) {
    let salary = 40000;
    let isPermanent = permanentStatus; // Local boolean variable

    let totalSalary = salary;
    if (isPermanent) {
        totalSalary += bonus;
    }

    console.log(`Permanent employee: ${isPermanent}`);
    console.log(`Total salary: ₹${totalSalary}`);
}

calculateSalary(true);
calculateSalary(false);

console.log(`Global bonus is still: ₹${bonus}`);
// Changing the local isPermanent value changes the calculation only.
// It does not change the global bonus variable.
