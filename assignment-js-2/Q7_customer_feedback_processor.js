// Q7. Customer Feedback Processor

const feedback = "Great product! Fast delivery and amazing sound quality!";
const wordCount = feedback.trim().split(/\s+/).length;
const normalizedFeedback = feedback.toLowerCase();

const containsNegativeWord =
    normalizedFeedback.includes("bad") ||
    normalizedFeedback.includes("poor");

console.log(`Feedback: ${feedback}`);
console.log(`Word count: ${wordCount}`);

if (!containsNegativeWord) {
    console.log("Positive Feedback");
} else {
    console.log("Needs Improvement");
}
