const gallery = document.getElementById("gallery");
const imageModal = document.getElementById("imageModal");
const modalContent = document.querySelector(".modal-content");
const modalImage = document.getElementById("modalImage");
const closeModalButton = document.getElementById("closeModal");

gallery.addEventListener("click", (event) => {
  if (event.target.tagName !== "IMG") return;

  // Use the clicked image URL to show its larger version.
  modalImage.src = event.target.src.replace("/300/200", "/1000/700");
  modalImage.alt = event.target.alt;
  imageModal.classList.add("open");
  imageModal.setAttribute("aria-hidden", "false");
});

function closeModal() {
  imageModal.classList.remove("open");
  imageModal.setAttribute("aria-hidden", "true");
  modalImage.src = "";
}

imageModal.addEventListener("click", closeModal);
modalContent.addEventListener("click", (event) => {
  event.stopPropagation(); // Keep clicks inside the modal from closing it.
});
closeModalButton.addEventListener("click", closeModal);
