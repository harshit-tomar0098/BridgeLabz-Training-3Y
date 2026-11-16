const trackingBox = document.getElementById("trackingBox");
const coordinates = document.getElementById("coordinates");

trackingBox.addEventListener("mousemove", (event) => {
  coordinates.textContent = `clientX: ${event.clientX}, clientY: ${event.clientY}`;
});

trackingBox.addEventListener("dblclick", (event) => {
  const boxBounds = trackingBox.getBoundingClientRect();
  const redDot = document.createElement("span");
  redDot.className = "dot";
  redDot.style.left = `${event.clientX - boxBounds.left}px`;
  redDot.style.top = `${event.clientY - boxBounds.top}px`;
  trackingBox.appendChild(redDot);
});
