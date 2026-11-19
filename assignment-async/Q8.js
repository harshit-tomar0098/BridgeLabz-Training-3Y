// Q8 – Order Processing Flow: Async Retry Mechanism

// The order API succeeds or fails randomly (50% chance each).
function submitOrder() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.5) {
                reject(new Error("Order submission failed."));
            } else {
                resolve("Order submitted successfully.");
            }
        }, 700);
    });
}

async function processOrder() {
    for (let attempt = 1; attempt <= 3; attempt++) {
        try {
            await submitOrder();
            console.log(`Attempt ${attempt}: Success`);
            return;
        } catch (error) {
            console.log(`Attempt ${attempt}: Failed`);
        }
    }

    // Reached only when all three attempts have failed.
    throw new Error("Order could not be processed");
}

processOrder()
    .catch((error) => {
        console.error("Final failure:", error.message);
    });
