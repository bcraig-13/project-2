function pokeSearch() {
  const param = $("#searchVal").val();
  const pokeURL = "http://pokeapi.co/api/v2/pokemon/" + param.toLowerCase();
  //Each # needs a matching id on the html

  $.getJSON(pokeURL, data => {
    const type = data.types;
    console.log(data);
    $(".card-img-top").attr("src", data.sprites.front_default);
    $(".card-img-top").attr("alt", data.name);
    $("#pkmnName").html(data.name);
    if (type.length === 2) {
      $("#typeOne").html(type[0].type.name);
      $("#typeTwo").html(type[1].type.name);
    } else {
      $("#typeOne").html(type[0].type.name);
    }
  });
}

// function pokeSubmit() {
//   if ($("#pkmnName") === null || $("levelVal" === null)) {
//     message.textContent =
//       "Search for a pokemon and enter an integer in the level input.";
//   } else {
//     // Insert card data into db
//   }
// }

$("#search").on("click", pokeSearch);
// $("#submit").on("click", pokeSubmit());
