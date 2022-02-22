async function getjsonData() {
  let jsonData = await fetch("./data/photographers.json");
  jsonData = await jsonData.json();

  return jsonData;
}

function getPhotographerName(photographerId, jsonData){

}