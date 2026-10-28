// Q8: Dynamic Object Updater

const user = {
    name: "John",
    email: "john@mail.com",
    age: 21
};

const userForm = document.getElementById("userForm");
const userOutput = document.getElementById("userOutput");

function displayUser() {
    userOutput.textContent = JSON.stringify(user, null, 2);
}

userForm.addEventListener("submit", event => {
    event.preventDefault();

    // Update the existing object instead of creating a separate one.
    user.name = document.getElementById("name").value.trim();
    user.email = document.getElementById("email").value.trim();
    user.age = Number(document.getElementById("age").value);

    displayUser();
});

displayUser();
