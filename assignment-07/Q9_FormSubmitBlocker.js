const signupForm = document.getElementById("signupForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const successMessage = document.getElementById("successMessage");

const inputs = [nameInput, emailInput, passwordInput];
const errors = [
  document.getElementById("nameError"),
  document.getElementById("emailError"),
  document.getElementById("passwordError")
];

function validateForm() {
  const values = inputs.map((input) => input.value.trim());
  const messages = [
    values[0] === "" ? "Name is required." : "",
    values[1] === "" ? "Email is required." :
      (!values[1].includes("@") ? "Email must contain @." : ""),
    values[2].length < 6 ? "Password must be at least 6 characters." : ""
  ];

  messages.forEach((message, index) => {
    errors[index].textContent = message;
  });

  return messages.every((message) => message === "");
}

signupForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Stop the browser from submitting/reloading the page.
  successMessage.textContent = "";

  if (validateForm()) {
    successMessage.textContent = "Form Submitted Successfully";
    signupForm.reset();
  }
});

// Re-check fields as the user corrects them so their errors disappear.
inputs.forEach((input) => {
  input.addEventListener("input", () => {
    validateForm();
    successMessage.textContent = "";
  });
});
