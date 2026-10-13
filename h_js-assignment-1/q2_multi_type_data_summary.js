// Q2. Multi-Type Data Summary
// Create sample values representing different database entries.
const userName = "Harshit";
const userAge = 20;
const isActive = true;
const favoriteSubjects = ["JavaScript", "Python", "Machine Learning"];
const userProfile = { city: "Mathura", role: "Student" };
const middleName = null;
let optionalField;

const report = [
    { Label: "userName", Value: userName, Type: typeof userName },
    { Label: "userAge", Value: userAge, Type: typeof userAge },
    { Label: "isActive", Value: isActive, Type: typeof isActive },
    { Label: "favoriteSubjects", Value: JSON.stringify(favoriteSubjects), Type: Array.isArray(favoriteSubjects) ? "array" : typeof favoriteSubjects },
    { Label: "userProfile", Value: JSON.stringify(userProfile), Type: typeof userProfile },
    { Label: "middleName", Value: middleName, Type: middleName === null ? "null" : typeof middleName },
    { Label: "optionalField", Value: String(optionalField), Type: typeof optionalField }
];

console.table(report);
