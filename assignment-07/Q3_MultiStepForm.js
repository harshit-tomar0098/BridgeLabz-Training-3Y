const steps = document.querySelectorAll(".step");
const backButton = document.getElementById("backButton");
const nextButton = document.getElementById("nextButton");
const registrationForm = document.getElementById("registrationForm");
const summary = document.getElementById("summary");
let currentStep = 0;

const fields = [
  document.getElementById("fullName"),
  document.getElementById("email"),
  document.getElementById("password")
];

const errorElements = [
  document.getElementById("nameError"),
  document.getElementById("emailError"),
  document.getElementById("passwordError")
];

function validateCurrentStep() {
  const value = fields[currentStep].value.trim();
  let errorMessage = "";

  if (value === "") {
    errorMessage = "This field is required.";
  } else if (currentStep === 1 && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
    errorMessage = "Enter a valid email address.";
  } else if (currentStep === 2 && value.length < 6) {
    errorMessage = "Password must contain at least 6 characters.";
  }

  errorElements[currentStep].textContent = errorMessage;
  return errorMessage === "";
}

function showStep() {
  steps.forEach((step, index) => step.classList.toggle("active", index === currentStep));
  backButton.disabled = currentStep === 0;
  nextButton.textContent = currentStep === steps.length - 1 ? "Finish" : "Next";
}

nextButton.addEventListener("click", () => {
  if (!validateCurrentStep()) return;

  if (currentStep < steps.length - 1) {
    currentStep++;
    showStep();
  } else {
    registrationForm.hidden = true;
    summary.hidden = false;
    summary.innerHTML = `
      <h2>Registration Summary</h2>
      <p><strong>Name:</strong> ${escapeHTML(fields[0].value.trim())}</p>
      <p><strong>Email:</strong> ${escapeHTML(fields[1].value.trim())}</p>
      <p><strong>Password:</strong> ${"*".repeat(fields[2].value.length)}</p>
      <h3>All steps completed successfully!</h3>
    `;
  }
});

backButton.addEventListener("click", () => {
  if (currentStep > 0) {
    currentStep--;
    showStep();
  }
});

function escapeHTML(value) {
  return value.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
  })[character]);
}

fields.forEach((field, index) => {
  field.addEventListener("input", () => {
    if (index === currentStep) errorElements[index].textContent = "";
  });
});
showStep();
