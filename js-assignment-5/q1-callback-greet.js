// Q1: Demonstrate callback flow.
// greetUser prints the greeting first, then invokes the callback.

function showEndMessage() {
    console.log("Welcome to the course!");
}

function greetUser(name, callback) {
    console.log(`Hello ${name}`);
    callback();
}

greetUser("Harshit", showEndMessage);
