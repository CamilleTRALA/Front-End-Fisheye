const lightbox = document.querySelector("#lightbox");

function displayLightbox(i, media) {
  lightbox.style.display = "block";
  const mediaContainer = document.querySelector(".media-container");

  const img = document.createElement("img");

  lightboxDisplayMedia();

  function lightboxDisplayMedia() {
    const mediaModel = mediaFactory(media[i]);
    const content = mediaModel.getLightboxMedia();

    mediaContainer.appendChild(content);
  }

  function lightboxScrollMedia(direction) {
    if (direction === "forward") {
      i += 1;
    } else if (direction === "backward") {
      i -= 1;
    }

    lightboxDisplayMedia();
  }
}

function closeLightbox() {
  const mediaContainer = document.querySelector(".media-container");

  lightbox.style.display = "none";

  console.log("azeazeaazeaze")
  while (mediaContainer.firstChild) {
    mediaContainer.removeChild(mediaContainer.firstChild);
  }
}
