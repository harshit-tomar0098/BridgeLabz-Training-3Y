// Q2. String Manipulation Report

const productName = " wireless headphones PRO ";

const cleanedWords = productName
    .trim()
    .toLowerCase()
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1));

const titleCaseName = cleanedWords.join(" ");
const finalTitle = titleCaseName.replace("Pro", "Pro Edition");

console.log(`Cleaned product title: ${finalTitle}`);
console.log(`Title length: ${finalTitle.length} characters`);
