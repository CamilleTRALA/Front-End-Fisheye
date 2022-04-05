let likesCliked = 0;

async function getPhotographerID() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const photographerID = urlParams.get("id");
  return photographerID;
}

async function getPhotographer(jsonData, photographerID) {
  photographer = jsonData.photographers.find(
    (element) => element.id == photographerID
  );
  return photographer;
}

async function getMedia(jsonData, photographerID) {
  media = jsonData.media.filter(
    (element) => element.photographerId == photographerID
  );
  return media;
}

async function displayHeader(photographer) {
  const photographHeader = document.querySelector(".photograph-header");

  const photographerModel = photographerFactory(photographer);

  const UserProfileDOM = photographerModel.getUserProfileDOM();
  const UserContactDOM = photographerModel.getUserContactDOM();
  const UserPhotoDOM = photographerModel.getUserPhotoDOM();

  photographHeader.appendChild(UserProfileDOM);
  photographHeader.appendChild(UserContactDOM);
  photographHeader.appendChild(UserPhotoDOM);
}

async function displayMedia(media) {
  const photographMedia = document.querySelector(".photograph-media");

  while (photographMedia.firstChild) {
    photographMedia.removeChild(photographMedia.firstChild);
  }

  media.forEach((media) => {
    const mediaModel = mediaFactory(media);
    const mediaCardDOM = mediaModel.getMediaCardDOM();
    photographMedia.appendChild(mediaCardDOM);
    const targetMedia = mediaCardDOM.querySelector(
      ".video-container, .image-container"
    );

    targetMedia.addEventListener("click", displayLightbox);

    mediaCardDOM.addEventListener("keyup", function (e) {
      if (e.key === "Enter") {
        targetMedia.click();
      }
    });
  });
}

function displayQuantities() {
  const quantities = document.querySelector(".quantities");
  const photographerModel = photographerFactory(photographer);
  likes = photographerModel.getUserLikesDOM();
  const price = photographerModel.getUserPriceDOM();
  console.log(likes);
  quantities.appendChild(likes);
  quantities.appendChild(price);
}

function likesIncrease(e) {
  console.log(e.target);
  const target = e.target;
  const likesCounter = target.parentNode.querySelector(".likes");

  likesCounter.textContent = Number(likesCounter.textContent) + 1;

  likesCliked += 1;

  const likesTotal = document.querySelector(".likes-total-number");
  likesTotal.textContent = Number(likesTotal.textContent) + 1;
}

async function init() {
  let jsonData = await fetch("./data/photographers.json");
  jsonData = await jsonData.json();

  photographerID = await getPhotographerID();

  const photographer = await getPhotographer(jsonData, photographerID);
  const media = await getMedia(jsonData, photographerID);

  displayHeader(photographer);
  displayMedia(media);
  displayQuantities();
  sortFocus();
  completeContactModalDOM(photographer);
}

init();
