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

  media.forEach((media) => {
    const mediaModel = mediaFactory(media);
    const mediaCardDOM = mediaModel.getMediaCardDOM();
    photographMedia.appendChild(mediaCardDOM);
  });
}

async function updateContactModal(photographer) {
  const h2 = document.querySelector("#contact-modal h2");
  const photographerModel = photographerFactory(photographer);
  const name = photographerModel.name;

  h2.textContent += `\n ${name}`;
}

async function init() {
  let jsonData = await fetch("./data/photographers.json");
  jsonData = await jsonData.json();

  photographerID = await getPhotographerID();

  const photographer = await getPhotographer(jsonData, photographerID);
  const media = await getMedia(jsonData, photographerID);

  displayHeader(photographer);
  displayMedia(media);
  updateContactModal(photographer);
}

init();
