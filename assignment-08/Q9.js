// Q9 – Fitness App Analytics

class FitnessAnalytics {
    constructor(workoutData) {
        if (!workoutData || workoutData.length === 0) {
            throw new Error("Workout dataset cannot be empty.");
        }
        this.workoutData = workoutData;
    }

    // Users who walked more than 7000 steps.
    getActiveUsers() {
        return this.workoutData.filter((user) => user.steps > 7000);
    }

    // Average calories burned by all users.
    getAverageCalories() {
        const totalCalories = this.workoutData.reduce(
            (total, user) => total + user.calories,
            0
        );
        return totalCalories / this.workoutData.length;
    }

    // Convert user data to readable messages.
    getUserSummary() {
        return this.workoutData.map(
            (user) => `${user.user} walked ${user.steps} steps and burned ${user.calories} calories.`
        );
    }
}

const workoutData = [
    { user: "A", steps: 8000, calories: 300 },
    { user: "B", steps: 12000, calories: 500 },
    { user: "C", steps: 4000, calories: 200 }
];

try {
    const analytics = new FitnessAnalytics(workoutData);

    console.log("Active Users:");
    console.table(analytics.getActiveUsers());

    console.log("Average Calories:", analytics.getAverageCalories());

    console.log("User Summary:");
    analytics.getUserSummary().forEach((summary) => console.log(summary));
} catch (error) {
    console.error("Analytics error:", error.message);
}
