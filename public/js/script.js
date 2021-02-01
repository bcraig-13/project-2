$(document).ready(() => {
  function pokeSearch() {
    const param = document.getElementById("searchVal").value;
    const pokeURL = "http://pokeapi.co/api/v2/pokemon/" + param.toLowerCase();
    //Each # needs a matching id on the html
    $.getJSON(pokeURL, function(data) {
      let type = data.types;
      $("#sprite").html(`<img src="${data.sprites.front_default}">`);
      $("#pkmn-name").html(data.name);
      if (type.length === 2) {
        $("#pkmn-type1").html(type[0].type.name);
        $("#pkmn-type2").html(type[1].type.name);
      } else {
        $("#pkmn-type1").html(type[0].type.name);
      }
    });
  }

  //Need to make an empty span under the add button with id of error
  function pokeSubmit() {
    if ($("#nameSpan") === null || $("levelVal" === null)) {
      error.textContent =
        "Search for a pokemon and enter an integer in the level input.";
    } else {
      // Insert card data into db
    }
  }

  $("#search").on("click", pokeSearch());
  $("#submit").on("click", pokeSubmit());
});
