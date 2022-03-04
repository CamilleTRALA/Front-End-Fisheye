const contactModal = document.querySelector("#contact-modal");

const contactForm = document.querySelector("#contact-form");

contactForm.onsubmit = async (e) => {
  e.preventDefault();
  console.log(contactForm.first.value.trim());
  console.log(contactForm.last.value.trim());
  console.log(contactForm.email.value.trim());
  console.log(contactForm.message.value.trim());

  closeModal();
};

async function completeContactModalDOM(photographer) {
  const h2 = document.querySelector("#contact-modal h2");
  const nameDOM = document.querySelector(".contact-name");
  const br = document.createElement("br");

  const photographerModel = photographerFactory(photographer);
  const name = photographerModel.name;

  nameDOM.textContent = ` ${name}`;

  const close = document.querySelector(".contact-close");
  close.addEventListener("click", closeModal);
}

function displayModal() {
  contactModal.style.display = "block";
}

function closeModal() {
  contactModal.style.display = "none";
}
