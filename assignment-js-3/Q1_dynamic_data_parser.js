// Q1. Dynamic Data Parser
"use strict";

const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];
const validNumbers = [];
const invalidNumbers = [];

for (let index = 0; index < apiData.length; index++) {
    const value = apiData[index];
    const numberValue = Number(value);
    const booleanValue = Boolean(value);
    const stringValue = String(value);

    const report = {
        index,
        original: value,
        numberForm: numberValue,
        booleanForm: booleanValue,
        stringForm: stringValue
    };

    // Whitespace-only strings are treated as invalid by this assignment,
    // even though Number(" ") evaluates to 0 in JavaScript.
    const isWhitespaceOnly = typeof value === "string" && value.trim() === "";
    const isValidNumber = !Number.isNaN(numberValue) && !isWhitespaceOnly;

    if (isValidNumber) {
        validNumbers.push({ ...report, number: numberValue });
        console.log(`[VALID] ${JSON.stringify(report)}`);
    } else {
        invalidNumbers.push({ ...report, reason: isWhitespaceOnly ? "Whitespace-only value" : "Not a valid number" });
        console.warn(`[INVALID] ${JSON.stringify(invalidNumbers[invalidNumbers.length - 1])}`);
    }
}

console.log("\nNumeric data report");
console.log("-------------------");
console.log(`Valid numeric entries: ${validNumbers.length}`);
console.log(validNumbers);
console.log(`Invalid numeric entries: ${invalidNumbers.length}`);
console.log(invalidNumbers);
