// Q7 – Banking Application (Private Fields)

class BankAccount {
    #balance;

    constructor(initialBalance = 0) {
        this.#balance = initialBalance;
    }

    deposit(amount) {
        if (amount <= 0) {
            throw new Error("Deposit amount must be greater than zero.");
        }
        this.#balance += amount;
        console.log(`Deposited: ₹${amount}`);
    }

    withdraw(amount) {
        if (amount <= 0) {
            throw new Error("Withdrawal amount must be greater than zero.");
        }
        if (amount > this.#balance) {
            throw new Error("Insufficient balance.");
        }
        this.#balance -= amount;
        console.log(`Withdrawn: ₹${amount}`);
    }

    getBalance() {
        return this.#balance;
    }
}

const account = new BankAccount(1000);

account.deposit(500);
console.log("Balance:", account.getBalance());

try {
    account.withdraw(2000); // Invalid: balance is not enough.
} catch (error) {
    console.error("Transaction error:", error.message);
}

console.log("Final Balance:", account.getBalance());
