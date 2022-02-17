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

  console.log(media);

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

async function displayMedia(photographerID) {
    const photographMedia = document.querySelector(".photograph-media");

    const mediaModel = mediaFactory(media);

    const UserMediaDOM = mediaModel.getUserMediaDOM();



}

async function init() {
  let jsonData = await fetch("./data/photographers.json");
  jsonData = await jsonData.json();

  photographerID = await getPhotographerID();

  const photographer = await getPhotographer(jsonData, photographerID);
  const media = await getMedia(jsonData, photographerID);

  displayHeader(photographer);
  displayMedia(media);
}

init();
