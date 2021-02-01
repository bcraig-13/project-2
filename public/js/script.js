$(document).ready(() => {
  function pokeSearch() {
    const param = document.getElementById("#searchVal").value;
    const pokeURL = "http://pokeapi.co/api/v2/pokemon/" + param.toLowerCase();
    //Each # needs a matching id on the html
    $.getJSON(pokeURL, data => {
      const type = data.types;
      $(".card-img-top").html(`<img src="${data.sprites.front_default}">`);
      $("#pkmnName").html(data.name);
      if (type.length === 2) {
        $("#typeOne").html(type[0].type.name);
        $("#typeTwo").html(type[1].type.name);
      } else {
        $("#typeOne").html(type[0].type.name);
      }
    });
  }

  function pokeSubmit() {
    if ($("#pkmnName") === null || $("levelVal" === null)) {
      message.textContent =
        "Search for a pokemon and enter an integer in the level input.";
    } else {
      // Insert card data into db
    }
  }

  $("#search").on("click", pokeSearch());
  $("#submit").on("click", pokeSubmit());
});
