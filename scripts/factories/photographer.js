function photographerFactory(data) {
  const { name, portrait, city, country, tagline, price, id } = data;

  const picture = `assets/photographers/Photographers ID Photos/${portrait}`;

  function getUserCardDOM() {
    const article = document.createElement("article");
    const img = document.createElement("img");
    const h2 = document.createElement("h2");
    const location = document.createElement("div");
    const description = document.createElement("div");
    const salary = document.createElement("div");
    const link = document.createElement("a");

    img.setAttribute("src", picture);
    img.setAttribute("alt", "");
    img.setAttribute("class", "id-photo");
    h2.textContent = name;
    location.textContent = city + ", " + country;
    description.textContent = tagline;
    salary.textContent = price + "€/jour";
    link.setAttribute("href", `photographer.html?id=${id}`);

    article.appendChild(img);
    article.appendChild(h2);
    article.appendChild(location);
    article.appendChild(description);
    article.appendChild(salary);
    link.appendChild(article);

    return link;
  }

  function getUserProfileDOM() {
    const container = document.createElement("div");
    const profile = document.createElement("div");
    const h1 = document.createElement("h1");
    const location = document.createElement("div");
    const description = document.createElement("div");

    container.setAttribute("class", "container");
    profile.setAttribute("class", "photographer-profile");
    h1.setAttribute("class", "photographer-name");
    h1.textContent = name;
    location.textContent = city + ", " + country;
    description.textContent = tagline;

    profile.appendChild(h1);
    profile.appendChild(location);
    profile.appendChild(description);
    container.appendChild(profile);

    return container;
  }

  function getUserContactDOM() {
    const container = document.createElement("div");
    const contact = document.createElement("button");

    container.setAttribute("class", "container");
    contact.setAttribute("class", "contact-button");

    contact.textContent = "Contactez-moi";
    container.appendChild(contact);

    contact.addEventListener("click", displayModal);

    return container;
  }

  function getUserPhotoDOM() {
    const container = document.createElement("div");
    const img = document.createElement("img");

    container.setAttribute("class", "container");
    img.setAttribute("src", picture);
    img.setAttribute("alt", name);
    img.setAttribute("class", "id-photo");

    container.appendChild(img);

    return container;
  }

  function getUserLikesDOM() {
    const likesContainer = document.createElement("div");
    const hearth = document.createElement("img");
    const likesNumber = document.createElement("div");
    let likesTotal = 0;

    likesContainer.setAttribute("class", "likes-total");
    hearth.setAttribute("src", "assets/icons/heart-solid.svg");
    hearth.setAttribute("class", "hearth");
    hearth.setAttribute("alt", "hearth");
    likesNumber.setAttribute("class", "likes-total-number");

    media.forEach((element) => (likesTotal += element.likes));
    likesNumber.textContent = likesTotal;

    likesContainer.appendChild(likesNumber);
    likesContainer.appendChild(hearth);

    return likesContainer;
  }

  function getUserPriceDOM() {
    const priceDOM = document.createElement("div");
    priceDOM.setAttribute("class", "price");
    priceDOM.textContent = price + "€ / jour";

    return priceDOM;
  }

  return {
    name,
    picture,
    getUserCardDOM,
    getUserProfileDOM,
    getUserContactDOM,
    getUserPhotoDOM,
    getUserLikesDOM,
    getUserPriceDOM,
  };
}
