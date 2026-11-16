const messageInput = document.getElementById("messageInput");
const counter = document.getElementById("counter");
const resetButton = document.getElementById("resetButton");
const maximumCharacters = 100;

function updateCounter() {
  const remainingCharacters = maximumCharacters - messageInput.value.length;
  counter.textContent = `${remainingCharacters} characters remaining`;
  counter.className = "counter";

  if (remainingCharacters <= 0) {
    counter.classList.add("danger");
  } else if (remainingCharacters <= 20) {
    counter.classList.add("warning");
  }
}

// Prevent any additional character once the limit has been reached.
messageInput.addEventListener("keydown", (event) => {
  const allowedKeys = ["Backspace", "Delete", "ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Tab"];
  const isShortcut = event.ctrlKey || event.metaKey;
  if (messageInput.value.length >= maximumCharacters &&
      !allowedKeys.includes(event.key) && !isShortcut) {
    event.preventDefault();
  }
});

messageInput.addEventListener("input", updateCounter);
resetButton.addEventListener("click", () => {
  messageInput.value = "";
  updateCounter();
});
updateCounter();
