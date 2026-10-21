// Q4. Array Performance Analyzer

// Generate 8 random integer scores from 30 through 100, inclusive.
const scores = Array.from(
    { length: 8 },
    () => Math.floor(Math.random() * 71) + 30
);

const highestScore = Math.max(...scores);
const lowestScore = Math.min(...scores);
const averageScore = scores.reduce((total, score) => total + score, 0) / scores.length;
const passedScores = scores.filter(score => score >= 50);
const scoreLabels = scores.map((score, index) => `Student ${index + 1}: ${score}`);

console.log("Array Performance Analyzer");
console.log("--------------------------");
console.log(scoreLabels.join("\n"));
console.log(`Highest score: ${highestScore}`);
console.log(`Lowest score: ${lowestScore}`);
console.log(`Average score: ${averageScore.toFixed(2)}`);
console.log(`Students passed (score ≥ 50): ${passedScores.length} out of ${scores.length}`);
