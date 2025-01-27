function displayLightbox(event) {
  const lightbox = document.querySelector("#lightbox");
  const target = event.currentTarget;
  const index = target.dataset.index;
  const close = document.querySelector(".close-lightbox");
  const left = document.querySelector(".left-arrow");
  const right = document.querySelector(".right-arrow");
  lightbox.style.display = "flex";
  lightboxDisplayMedia(index);

  close.addEventListener("click", closeLightbox);
  left.addEventListener("click", lightboxLeft);
  right.addEventListener("click", lightboxRight);
  document.addEventListener("keydown", controlKeyboard);
}

function lightboxDisplayMedia(index) {
  if (!media[index]) {
    return;
  }
  const mediaContainer = document.querySelector(".media-container");
  const lightboxModel = lightboxFactory(media[index]);
  const content = lightboxModel.getLightboxMedia();

  while (mediaContainer.firstChild) {
    mediaContainer.removeChild(mediaContainer.firstChild);
  }

  mediaContainer.appendChild(content);
}

function lightboxLeft() {
  const lightboxMedia = document.querySelector(
    "#lightbox .content img, #lightbox .content video "
  );
  index = lightboxMedia.dataset.index;
  lightboxDisplayMedia(Number(index) - 1);
}

function lightboxRight() {
  const lightboxMedia = document.querySelector(
    "#lightbox .content img, #lightbox .content video "
  );
  index = lightboxMedia.dataset.index;
  lightboxDisplayMedia(Number(index) + 1);
}

function closeLightbox() {
  const mediaContainer = document.querySelector(".media-container");
  lightbox.style.display = "none";
  while (mediaContainer.firstChild) {
    mediaContainer.removeChild(mediaContainer.firstChild);
  }
  document.removeEventListener("keydown", controlKeyboard);
}

function controlKeyboard(e) {
  e.preventDefault();
  switch (e.key) {
    case "ArrowLeft":
      lightboxLeft();
      break;
    case "ArrowRight":
      lightboxRight();
      break;
    case "Escape":
      closeLightbox();
      break;
  }
}
