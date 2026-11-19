// Q10 – The Final Delivery: Async Pipeline Debugger

// Creates one asynchronous delivery step with a random 1–2 second delay.
// Each step has a 20% chance of failing.
function deliveryStep(stepName, successMessage) {
    return new Promise((resolve, reject) => {
        const delay = 1000 + Math.random() * 1000;

        setTimeout(() => {
            if (Math.random() < 0.2) {
                reject(new Error(`${stepName} failed`));
            } else {
                console.log(successMessage);
                resolve();
            }
        }, delay);
    });
}

async function runPipeline() {
    console.log("Start Pipeline");

    try {
        // await pauses this async function until the current step settles.
        // The JavaScript event loop can continue handling other queued work
        // while the Promise is pending; it does not block the whole program.
        await deliveryStep("takeOrder", "Step 1: Order taken");
        await deliveryStep("prepare", "Step 2: Food prepared");
        await deliveryStep("pack", "Step 3: Package ready");
        await deliveryStep("dispatch", "Step 4: Out for delivery");
        await deliveryStep("deliver", "Delivery completed!");

    } catch (error) {
        // The first rejected step skips the remaining steps and enters catch.
        console.error("Pipeline failed!", error.message);
    }
}

runPipeline();
