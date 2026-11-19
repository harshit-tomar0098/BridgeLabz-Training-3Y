// Q1 – The Startup Morning: Async Coffee Maker

// Returns a Promise that resolves after a random delay of 1–2 seconds.
// A small chance of failure is included to demonstrate .catch().
function boilWater() {
    return new Promise((resolve, reject) => {
        const delay = 1000 + Math.random() * 1000;

        setTimeout(() => {
            if (Math.random() < 0.1) {
                reject("Failed to boil water.");
            } else {
                console.log("Water boiled.");
                resolve();
            }
        }, delay);
    });
}

function brewCoffee() {
    return new Promise((resolve, reject) => {
        const delay = 1000 + Math.random() * 1000;

        setTimeout(() => {
            if (Math.random() < 0.1) {
                reject("Coffee brewing failed.");
            } else {
                console.log("Coffee brewed.");
                resolve();
            }
        }, delay);
    });
}

function pourCoffee() {
    return new Promise((resolve, reject) => {
        const delay = 1000 + Math.random() * 1000;

        setTimeout(() => {
            if (Math.random() < 0.1) {
                reject("Could not pour the coffee.");
            } else {
                console.log("Coffee poured into the cup.");
                resolve();
            }
        }, delay);
    });
}

// .then() starts the next step only after the previous Promise resolves.
boilWater()
    .then(() => brewCoffee())
    .then(() => pourCoffee())
    .then(() => console.log("Coffee ready for the team!"))
    .catch((error) => console.error("Coffee process failed:", error));
