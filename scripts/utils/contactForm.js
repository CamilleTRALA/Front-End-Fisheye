const modal = document.querySelector("#contact-modal");
const form = document.querySelector("form");

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
