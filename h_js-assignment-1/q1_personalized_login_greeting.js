// Q1. Personalized Login Greeting
// Change userName to test the greeting for a different user.
const userName = "Harshit";
const currentHour = new Date().getHours();

let greeting;

if (currentHour < 12) {
    greeting = `Good Morning ${userName}!`;
} else if (currentHour >= 12 && currentHour <= 17) {
    greeting = `Good Afternoon ${userName}!`;
} else {
    greeting = `Good Evening ${userName}!`;
}

console.log(greeting);
