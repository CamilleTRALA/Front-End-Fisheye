const contactModal = document.querySelector("#contact-modal");
const close = document.querySelector(".close-modal");

close.addEventListener("click", closeModal);

function displayModal() {
  contactModal.style.display = "block";
}

function closeModal() {
  contactModal.style.display = "none";
}
