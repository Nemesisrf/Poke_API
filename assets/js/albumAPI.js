const API = "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20";

const getData = (api) => {
  return fetch(api)
    .then((Response) => Response.json())
    .then((json) => {
      fillData(json);
    })
    .catch((error) => {
      console.log("Error:", error);
    });
};
const fillData = (data) => {
  let html = "";
  data.results.forEach((elementos) => {
    fetch(elementos.url)
      .then((response) => response.json())
      .then((json) => {
        html += '<div class="col">';
        html += '<div class="card h-100" style="with: 12rem;">';
        html += `<img src="${json.sprites.front_default}" class="card-img-top" alt="${elementos.name}">`;
        html += '<div class="card-body">';
        html += `<h5 class="card-title text-black-50">${elementos.name}</h5>`;
        html += "</div>";
        html += "</div>";
        html += "</div>";
        document.getElementById("dataAlbum").innerHTML = html;
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  });
};

getData(API);