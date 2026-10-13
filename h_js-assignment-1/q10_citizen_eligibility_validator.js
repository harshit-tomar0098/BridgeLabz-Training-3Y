// Q10. Citizen Eligibility Validator
// Change age and isCitizen to test the eligibility rules.
const age = 19;
const isCitizen = true;

if (isCitizen) {
    if (age >= 18) {
        if (age >= 21) {
            console.log("Eligible for all services.");
        } else {
            console.log("Eligible to vote only.");
        }
    } else {
        console.log("Not eligible yet.");
    }
} else {
    if (age >= 18) {
        console.log("Only age criteria met.");
    } else {
        console.log("Not eligible yet.");
    }
}
