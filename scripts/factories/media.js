function mediaFactory(data) {
  const { id, price, title, image, video, photographerId, likes } = data;

  function getMediaCardDOM() {
    const article = document.createElement("article");

    const description = document.createElement("div");
    const h2 = document.createElement("h2");
    const likesCounter = document.createElement("div");
    const hearth = document.createElement("img");
    const index = media.indexOf(data);
    const mediaContainer = document.createElement("div");

    if (image) {
      const path = `assets/photographers/${photographerId}/${image}`;
      const img = document.createElement("img");
      img.setAttribute("src", path);
      mediaContainer.setAttribute("data-index", index);
      mediaContainer.appendChild(img);
      mediaContainer.setAttribute("class", "container image-container");
    } else if (video) {
      const path = `assets/photographers/${photographerId}/${video}`;
      const vid = document.createElement("video");
      vid.setAttribute("src", path);
      mediaContainer.setAttribute("data-index", index);
      mediaContainer.appendChild(vid);
      mediaContainer.setAttribute("class", "container video-container");
    }

    article.appendChild(mediaContainer);
    description.setAttribute("class", "description");
    h2.textContent = title;
    likesCounter.textContent = likes;
    hearth.setAttribute("src", "assets/icons/heart-solid.svg");

    description.appendChild(h2);
    description.appendChild(likesCounter);
    description.appendChild(hearth);
    article.appendChild(description);

    return article;
  }

  return {
    getMediaCardDOM,
  };
}
