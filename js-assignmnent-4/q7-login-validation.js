// Q7: Login Form Validation using RegExp

const loginForm = document.getElementById("loginForm");
const messages = document.getElementById("messages");

loginForm.addEventListener("submit", event => {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errors = [];

    if (username.length < 5) {
        errors.push("Username must contain at least 5 characters.");
    }
    if (password.length < 8) {
        errors.push("Password must contain at least 8 characters.");
    }
    if (!/[0-9]/.test(password)) {
        errors.push("Password must include at least one number.");
    }
    if (!/[A-Z]/.test(password)) {
        errors.push("Password must include at least one uppercase letter.");
    }
    if (!/[a-z]/.test(password)) {
        errors.push("Password must include at least one lowercase letter.");
    }
    if (!/[^A-Za-z0-9]/.test(password)) {
        errors.push("Password must include at least one special character.");
    }

    messages.replaceChildren();
    const list = document.createElement("ul");

    if (errors.length) {
        messages.className = "error";
        errors.forEach(message => {
            const item = document.createElement("li");
            item.textContent = message;
            list.appendChild(item);
        });
        messages.appendChild(list);
    } else {
        messages.className = "success";
        messages.textContent = "Validation successful! Your input meets the requirements.";
    }
});
