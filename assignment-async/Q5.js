// Q5 – Frontend Rush: Avoiding Callback Hell

// Part A: Nested callbacks (callback hell demonstration).
function design(callback) {
    setTimeout(() => {
        console.log("Design completed.");
        callback();
    }, 1000);
}

function build(callback) {
    setTimeout(() => {
        console.log("Build completed.");
        callback();
    }, 1000);
}

function test(callback) {
    setTimeout(() => {
        console.log("Testing completed.");
        callback();
    }, 1000);
}

function deploy(callback) {
    setTimeout(() => {
        console.log("Deployment completed.");
        callback();
    }, 1000);
}

function celebrate(callback) {
    setTimeout(() => {
        console.log("Celebration time!");
        if (callback) callback();
    }, 1000);
}

console.log("Starting callback pipeline...");
design(() => {
    build(() => {
        test(() => {
            deploy(() => {
                celebrate(() => {
                    console.log("Callback pipeline finished.");
                });
            });
        });
    });
});

// Part B: The same pipeline using async/await.
function runStage(stageName) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`${stageName} completed.`);
            resolve();
        }, 1000);
    });
}

async function runAsyncPipeline() {
    console.log("Starting async/await pipeline...");

    await runStage("Design");
    await runStage("Build");
    await runStage("Test");
    await runStage("Deploy");
    await runStage("Celebrate");

    console.log("Async/await pipeline finished.");
}

// Run the second version after the callback demonstration finishes.
// This keeps the two demonstrations separate and easy to compare.
setTimeout(runAsyncPipeline, 5500);

// async/await makes asynchronous code read in a top-to-bottom sequence.
// It avoids deeply nested callbacks and makes try/catch error handling easier.
