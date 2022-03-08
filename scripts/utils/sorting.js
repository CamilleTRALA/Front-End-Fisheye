const popularity = document.querySelector("#sort-popularity");
const date = document.querySelector("#sort-date");
const title = document.querySelector("#sort-title");
const dropdown = document.querySelector(".dropdown");

popularity.addEventListener("click", (e) => {
  media = sort(media, "popularity");
  displayMedia(media);
});
date.addEventListener("click", (e) => {
  media = sort(media, "date");
  displayMedia(media);
});
title.addEventListener("click", (e) => {
  media = sort(media, "title");
  displayMedia(media);
});

function sort(media, factor) {
  if (factor === "popularity") {
    media = media.sort((a, b) => (a.likes <= b.likes ? 1 : -1));
  } else if (factor === "date") {
    media = media.sort((a, b) => (a.date <= b.date ? 1 : -1));
  } else if (factor === "title") {
    media = media.sort((a, b) =>
      a.title.toLowerCase() >= b.title.toLowerCase() ? 1 : -1
    );
  }
  if (dropdown.dataset.selected != factor) {
    dropdown.dataset.decreasing = "";
  }
  if (dropdown.dataset.decreasing) {
    dropdown.dataset.decreasing = "";
    media = media.reverse();
  } else {
    dropdown.dataset.decreasing = "true";
  }
  dropdown.dataset.selected = factor;
  return media;
}

// dropdown.addEventListener("click", displayDropdown);

// function displayDropdown() {
//   popularity.style.display = "block";
//   date.style.display = "block";
//   title.style.display = "block";
// }

function displaySelected() {
  const selected = document.querySelector(`.${dropdown.dataset.selected}`);
  popularity.style.display = "none";
  date.style.display = "none";
  title.style.display = "none";
  selected.style.display = "block";
}
