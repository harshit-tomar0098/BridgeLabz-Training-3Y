// Q5: Movie Ticket Booking (Objects + RegExp)

const bookingForm = document.getElementById("bookingForm");
const ticketElement = document.getElementById("ticket");

const bookingValidators = {
    name: value => /^[A-Za-z]+(?:[ '-][A-Za-z]+)*$/.test(value.trim()),
    email: value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()),
    seats: value => {
        const seats = Number(value);
        return Number.isInteger(seats) && seats >= 1 && seats <= 10;
    }
};

const bookingErrors = {
    name: "Enter a name using letters only.",
    email: "Enter a valid email address.",
    seats: "Choose a whole number from 1 to 10."
};

function validateBookingField(fieldName) {
    const input = document.getElementById(fieldName);
    const error = document.getElementById(`${fieldName}Error`);
    const valid = bookingValidators[fieldName](input.value);

    input.classList.toggle("valid", valid);
    input.classList.toggle("invalid", !valid);
    error.textContent = valid ? "" : bookingErrors[fieldName];
    return valid;
}

bookingForm.addEventListener("submit", event => {
    event.preventDefault();
    const isValid = Object.keys(bookingValidators)
        .map(validateBookingField)
        .every(Boolean);

    if (!isValid) {
        ticketElement.hidden = true;
        return;
    }

    const booking = {
        name: document.getElementById("name").value.trim(),
        email: document.getElementById("email").value.trim(),
        seats: Number(document.getElementById("seats").value)
    };

    ticketElement.hidden = false;
    ticketElement.textContent =
        `Booking Confirmed\\nName: ${booking.name}\\nEmail: ${booking.email}\\nSeats: ${booking.seats}`;
    ticketElement.style.whiteSpace = "pre-line";
});
