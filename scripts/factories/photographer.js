function photographerFactory(data) {
  const { name, portrait, city, country, tagline, price, id } = data;

  console.log(tagline);

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
  return { name, picture, getUserCardDOM };
}
