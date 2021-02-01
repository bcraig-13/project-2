$(document).ready(() => {
  const Pokedex = require("pokedex-promise-v2");
  const P = new Pokedex();
  const pkmnSearch = $("#SEARCH");
  const addTo = $("#ADDTO");

  pkmnSearch.on("click", (event) => {
    event.preventDefault();
    let searchVal = $("#SEARCH").val();
  });
});
