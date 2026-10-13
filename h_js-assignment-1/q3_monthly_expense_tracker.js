// Q3. Monthly Expense Tracker
// Sample monthly expenses for five categories; change these values as needed.
const expenses = {
    food: 6500,
    travel: 1800,
    rent: 9000,
    bills: 2200,
    leisure: 1500
};

let total = 0;
for (const category in expenses) {
    total += expenses[category];
}

const average = total / Object.keys(expenses).length;
total += total * 0.10; // Add 10% tax using an assignment operator.
const finalAmount = total;

console.log(`Total before tax: ₹${(finalAmount / 1.10).toFixed(2)}`);
console.log(`Average expense: ₹${average.toFixed(2)}`);
console.log(`Final amount after 10% tax: ₹${finalAmount.toFixed(2)}`);
