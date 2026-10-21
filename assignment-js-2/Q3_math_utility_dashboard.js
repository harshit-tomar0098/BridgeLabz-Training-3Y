// Q3. Math Utility Dashboard

const x = 16.75;
const roundedValue = Math.round(x);
const squareRoot = Math.sqrt(x);
const powerValue = Math.pow(x, 3);
const randomNumber = Math.floor(Math.random() * 41) + 10;

const summary = `
Math Utility Dashboard
----------------------
Input number: ${x}
Rounded value: ${roundedValue}
Square root: ${squareRoot.toFixed(4)}
Power (x³): ${powerValue.toFixed(4)}
Random number (10–50): ${randomNumber}
`;

console.log(summary);
