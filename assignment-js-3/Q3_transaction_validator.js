// Q3. Transaction Validator
"use strict";

class NegativeAmountError extends Error {
    constructor(message) {
        super(message);
        this.name = "NegativeAmountError";
    }
}
class MissingFieldError extends Error {
    constructor(message) {
        super(message);
        this.name = "MissingFieldError";
    }
}
class NullTransactionError extends Error {
    constructor(message) {
        super(message);
        this.name = "NullTransactionError";
    }
}

const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

const valid = [];
const invalid = [];

for (let index = 0; index < transactions.length; index++) {
    const transaction = transactions[index];

    try {
        // Set a debugger breakpoint on the next line to inspect `index`,
        // `transaction`, `valid`, and `invalid` in VS Code.
        debugger;

        if (transaction === null || transaction === undefined) {
            throw new NullTransactionError("Transaction entry is null.");
        }
        if (transaction.id === undefined || transaction.amount === undefined) {
            throw new MissingFieldError("Transaction is missing id or amount.");
        }
        if (transaction.amount < 0) {
            throw new NegativeAmountError("Transaction amount cannot be negative.");
        }

        valid.push(transaction);
    } catch (error) {
        invalid.push({
            index: index + 1,
            transaction,
            type: error.name,
            message: error.message
        });
    }
}

console.log("Transaction Validation Report");
console.log(`Successful: ${valid.length}`);
console.log(`Failed: ${invalid.length}`);
console.log("Valid transactions:", valid);
console.log("Invalid transactions by error type:", invalid);
