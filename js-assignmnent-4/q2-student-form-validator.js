// Q2: Student Form Validator (Forms + RegExp)

const studentForm = document.getElementById("studentForm");
const validators = {
    name: value => /^[A-Za-z]+(?:[ '-][A-Za-z]+)*$/.test(value.trim()),
    email: value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()),
    phone: value => /^\d{10}$/.test(value.trim()),
    password: value => /[A-Z]/.test(value) && /\d/.test(value) && /[^A-Za-z0-9]/.test(value)
};

const messages = {
    name: "Use letters only (spaces, apostrophes, and hyphens between names are allowed).",
    email: "Enter a valid email, for example student@example.com.",
    phone: "Phone number must contain exactly 10 digits.",
    password: "Password needs at least one uppercase letter, one number, and one special character."
};

function validateField(fieldName) {
    const input = document.getElementById(fieldName);
    const error = document.getElementById(`${fieldName}Error`);
    const valid = validators[fieldName](input.value);

    input.classList.toggle("valid", valid);
    input.classList.toggle("invalid", !valid);
    error.textContent = valid || input.value.length === 0 ? "" : messages[fieldName];
    return valid;
}

Object.keys(validators).forEach(fieldName => {
    document.getElementById(fieldName).addEventListener("input", () => {
        validateField(fieldName);
        document.getElementById("result").textContent = "";
    });
});

studentForm.addEventListener("submit", event => {
    event.preventDefault();
    const allValid = Object.keys(validators).map(validateField).every(Boolean);
    document.getElementById("result").textContent = allValid
        ? "Registration successful!"
        : "Please correct the highlighted fields.";
    document.getElementById("result").style.color = allValid ? "#16803c" : "#c62828";
});
