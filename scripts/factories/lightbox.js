function lightboxFactory(data) {
  const { id, price, title, image, video, photographerId, likes } = data;

  function getLightboxMedia() {
    const content = document.createElement("div");
    const name = document.createElement("div");
    content.setAttribute("class", "content");
    name.setAttribute("class", "lightbox-name");
    name.textContent = name;
    const index = media.indexOf(data);

    if (image) {
      const path = `assets/photographers/${photographerId}/${image}`;
      const img = document.createElement("img");
      img.setAttribute("src", path);
      img.setAttribute("data-index", index);
      content.appendChild(img);
    } else if (video) {
      const path = `assets/photographers/${photographerId}/${video}`;
      const vid = document.createElement("video");
      vid.setAttribute("src", path);
      vid.setAttribute("data-index", index);
      content.appendChild(vid);
    }

    content.appendChild(name);

    return content;
  }

  return {
    getLightboxMedia,
  };
}
