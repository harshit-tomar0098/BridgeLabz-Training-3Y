// Q9. JSON Audit
"use strict";

const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Mina","age":"22"}'
];

const clean = [];
const errors = [];
const under18 = [];

for (let index = 0; index < rawData.length; index++) {
    const lineNumber = index + 1;

    try {
        // Place a breakpoint here to step through parsing and catch behavior.
        debugger;
        const parsed = JSON.parse(rawData[index]);

        if (parsed.user === undefined || parsed.age === undefined) {
            throw new Error("Missing required key: user or age");
        }

        const age = Number(parsed.age);
        if (!Number.isFinite(age) || age < 0) {
            throw new Error("Age must be a valid non-negative number");
        }

        const record = { ...parsed, age };
        clean.push(record);

        if (age < 18) {
            under18.push(record);
        }
    } catch (error) {
        errors.push({
            line: lineNumber,
            input: rawData[index],
            error: error instanceof SyntaxError ? "Invalid JSON" : error.message
        });
        console.error(`Line ${lineNumber}: ${errors[errors.length - 1].error}`);
    }
}

console.log("Clean records:", clean);
console.log("Error report:", errors);
console.log("Valid records under 18:", under18);
console.log(`Valid: ${clean.length}; Failed: ${errors.length}`);
