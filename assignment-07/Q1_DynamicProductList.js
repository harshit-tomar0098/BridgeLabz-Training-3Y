const productInput = document.getElementById("productInput");
const addButton = document.getElementById("addButton");
const productList = document.getElementById("productList");

function addProduct() {
  const productName = productInput.value.trim();
  if (productName === "") return;

  const listItem = document.createElement("li");
  const nameSpan = document.createElement("span");
  nameSpan.className = "product-name";
  nameSpan.textContent = productName;

  const editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.dataset.action = "edit";

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.className = "delete-button";
  deleteButton.dataset.action = "delete";

  listItem.append(nameSpan, editButton, deleteButton);
  productList.appendChild(listItem);
  productInput.value = "";
}

function saveEdit(listItem) {
  const editInput = listItem.querySelector(".edit-input");
  if (!editInput) return;

  const updatedName = editInput.value.trim();
  const nameSpan = document.createElement("span");
  nameSpan.className = "product-name";
  nameSpan.textContent = updatedName || "Untitled product";
  editInput.replaceWith(nameSpan);
}

addButton.addEventListener("click", addProduct);
productInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") addProduct();
});

// Event delegation: one listener handles every Edit and Delete button.
productList.addEventListener("click", (event) => {
  const actionButton = event.target.closest("button[data-action]");
  if (!actionButton) return;

  const listItem = actionButton.closest("li");
  if (actionButton.dataset.action === "delete") {
    listItem.remove();
  } else if (actionButton.dataset.action === "edit" && !listItem.querySelector(".edit-input")) {
    const nameSpan = listItem.querySelector(".product-name");
    const editInput = document.createElement("input");
    editInput.className = "edit-input";
    editInput.value = nameSpan.textContent;
    nameSpan.replaceWith(editInput);
    editInput.focus();
    editInput.select();
  }
});

// Save the edited value when focus moves outside the edited list item.
document.addEventListener("click", (event) => {
  document.querySelectorAll("#productList li").forEach((listItem) => {
    if (listItem.querySelector(".edit-input") && !listItem.contains(event.target)) {
      saveEdit(listItem);
    }
  });
});

// Also save when Enter is pressed while editing.
productList.addEventListener("keydown", (event) => {
  if (event.target.classList.contains("edit-input") && event.key === "Enter") {
    saveEdit(event.target.closest("li"));
  }
});
