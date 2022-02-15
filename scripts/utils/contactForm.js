const modalOpen = document.querySelectorAll(".display-modal-contact");
const modalClose = document.querySelectorAll(".close-modal");
const modal = document.querySelector(".bg-modal-contact");
const form = document.querySelector("form");

modalOpen.forEach((btn) => btn.addEventListener("click", displayModal));
modalClose.forEach((btn) => btn.addEventListener("click", closeModal));

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

function displayModal() {
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}
