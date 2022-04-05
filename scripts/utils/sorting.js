const popularity = document.querySelector("#sort-popularity");
const date = document.querySelector("#sort-date");
const title = document.querySelector("#sort-title");
const dropdown = document.querySelector(".dropdown");
const dropdownPopularity = document.querySelector("#sort-popularity");
const dropdownDate = document.querySelector("#sort-date");
const dropdownTitle = document.querySelector("#sort-title");

popularity.addEventListener("click", (e) => {
  media = sort(media, "popularity");
  displayMedia(media);
});
popularity.addEventListener("keyup", sortControlKeyboard);

date.addEventListener("click", (e) => {
  media = sort(media, "date");
  displayMedia(media);
});
date.addEventListener("keyup", sortControlKeyboard);

title.addEventListener("click", (e) => {
  media = sort(media, "title");
  displayMedia(media);
});
title.addEventListener("keyup", sortControlKeyboard);

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

function displaySelected() {
  const selected = document.querySelector(`.${dropdown.dataset.selected}`);
  popularity.style.display = "none";
  date.style.display = "none";
  title.style.display = "none";
  selected.style.display = "block";
}

function sortFocus() {

  const dropdownChildrens = dropdown.children;

  for (let i = 0; i < dropdownChildrens.length; i++) {
    dropdownChildrens[i].addEventListener("focus", (e) => {
      dropdownChildrens[i].parentNode.dataset.show = "true";
    });

    dropdownChildrens[i].addEventListener("blur", (e) => {
      dropdownChildrens[i].parentNode.dataset.show = "";
    });
  }
}

function sortControlKeyboard(e) {
  e.preventDefault();
  switch (e.key) {
    case "ArrowUp":
      e.currentTarget.previousElementSibling.focus();
      break;
    case "ArrowDown":
      e.currentTarget.nextElementSibling.focus();
      console.log(e.currentTarget.previousElementSibling);
      break;
    case "Enter":
      e.currentTarget.click();
      break;
  }
}
