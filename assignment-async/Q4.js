// Q4 – DevOps Delay: Async Timeout Race

function deployToServer(serverName, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Each server has a 20% chance of failing.
            if (Math.random() < 0.2) {
                reject(new Error(`${serverName} deployment failed.`));
            } else {
                console.log(`${serverName} deployment completed.`);
                resolve(`${serverName} responded`);
            }
        }, delay);
    });
}

const serverA = deployToServer("Server A", 2000);
const serverB = deployToServer("Server B", 3000);

// Promise.all() resolves only when both servers succeed.
// It rejects immediately if either server rejects.
Promise.all([serverA, serverB])
    .then(() => console.log("Deployment completed for all servers"))
    .catch((error) => console.error("Deployment error:", error.message));

// Promise.race() settles as soon as the first Promise settles.
// If the first response is a rejection, race() also rejects.
Promise.race([serverA, serverB])
    .then((response) => console.log("Fastest response:", response))
    .catch((error) => console.error("Fastest response failed:", error.message));
