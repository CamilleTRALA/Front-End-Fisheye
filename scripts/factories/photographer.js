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
    const profile = document.createElement("div");
    const h1 = document.createElement("h1");
    const location = document.createElement("div");
    const description = document.createElement("div");

    profile.setAttribute("class", "photographer-profile");
    h1.setAttribute("class", "photographer-name");
    h1.textContent = name;
    location.textContent = city + ", " + country;
    description.textContent = tagline;

    profile.appendChild(h1);
    profile.appendChild(location);
    profile.appendChild(description);

    return profile;
  }

  function getUserContactDOM() {
    const contact = document.createElement("button");

    contact.setAttribute("class", "contact_button");
    contact.setAttribute("onclick", `displayModal(${name})`);
    
    contact.textContent = "Contactez-moi";

    return contact;
  }

  function getUserPhotoDOM() {
    const img = document.createElement("img");

    img.setAttribute("src", picture);
    img.setAttribute("class", "id-photo");

    return img;
  }

  return {
    name,
    picture,
    getUserCardDOM,
    getUserProfileDOM,
    getUserContactDOM,
    getUserPhotoDOM,
  };
}


function contentFactory(data) {
  
}