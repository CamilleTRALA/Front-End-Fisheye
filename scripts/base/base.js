async function getjsonData() {
  let jsonData = await fetch("./data/photographers.json");
  jsonData = await jsonData.json();

  return jsonData;
}

// function mediaPath(media) {
//   if (image) {
//     const path = `assets/photographers/${media.photographerId}/${media.image}`;
//   } else if (video) {
//     const path = `assets/photographers/${media.photographerId}/${media.video}`;
//   }
// }
