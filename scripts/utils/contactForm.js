const contactModal = document.querySelector("#contact-modal");

function displayModal() {
  contactModal.style.display = "block";
}

function closeModal() {
  contactModal.style.display = "none";
}

const contactForm = document.querySelector("#contact-form");

contactForm.onsubmit = async (e) => {
  e.preventDefault();
  console.log(contactForm.first.value.trim());
  console.log(contactForm.last.value.trim());
  console.log(contactForm.email.value.trim());
  console.log(contactForm.message.value.trim());

  closeModal();
};
