$(document).ready(() => {
  function pokeSubmit() {
    let param = document.getElementById("searchVal").value;
    let pokeURL = "http://pokeapi.co/api/v2/pokemon/" + param.toLowerCase();

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
});
