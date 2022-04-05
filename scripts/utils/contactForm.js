const contactModal = document.querySelector("#contact-modal");

const contactForm = document.querySelector("#contact-form");

const body = document.querySelector("body");

const modalCloseBtn = document.querySelector(".contact-close");

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
  body.setAttribute("aria-hidden", "true");
  contactModal.setAttribute("aria-hidden", "false");
  modalCloseBtn.focus();
  console.log(modalCloseBtn);

  document.addEventListener("keydown", controlKeyboardModal);
}

function closeModal() {
  contactModal.style.display = "none";
  document.removeEventListener("keydown", controlKeyboardModal);
}

function controlKeyboardModal(e){
  console.log(e.key);
  switch (e.key) {
    case "Escape":
      closeModal() ;
      break;
  }
}