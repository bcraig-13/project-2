function pokeSearch() {
  const param = $("#searchVal").val();
  const pokeURL = "http://pokeapi.co/api/v2/pokemon/" + param.toLowerCase();

  if ($("#searchVal").val() === "") {
    message.textContent = "Enter a pokemon name.";
    return;
  }
  $.getJSON(pokeURL, (data) => {
    const type = data.types;
    console.log(data);
    $("#sprite").attr("src", data.sprites.front_default);
    $("#sprite").attr("alt", data.name);
    $("#pkmnName").html(data.name);
    if (type.length === 2) {
      $("#typeOne").html(type[0].type.name);
      $("#typeTwo").html(type[1].type.name);
    } else {
      $("#typeOne").html(type[0].type.name);
    }
  });
}

function pokeSubmit(event) {
  event.preventDefault();
  if ($("#pkmnName").text() === "" || $("#levelVal").val() === "") {
    message.textContent =
      "Search for a pokemon and enter an integer in the level input.";
    // return;
  } else {
    const addPokemon = {
      sprite: $("#sprite").attr("src"),
      name: $("#pkmnName").text(),
      typeOne: $("#typeOne").text(),
      typeTwo: $("#typeTwo").text(),
      level: $("#levelVal").text(),
    };
    console.log(addPokemon);
    $.post("/api/pokemon", addPokemon);
    message.textContent =
      $("#pkmnName").text() + " was added to your collection!";
  }
}

function clearMsg() {
  message.textContent = "";
  return;
}

function clearCard() {
  $("#sprite").attr("src", ""); //add url for pokeball image
  $("#sprite").attr("alt", "");
  $("#pkmnName").html();
  $("#typeOne").html();
  $("#typeTwo").html();
}

$("#searchVal").on("click", clearMsg);
$("#levelVal").on("click", clearMsg);
$("#search").on("click", pokeSearch);
$("#submit").on("click", pokeSubmit);
