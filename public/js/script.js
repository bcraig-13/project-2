function pokeSearch() {
  window.animateSearch();
  const param = $("#searchVal").val();
  const pokeURL = "https://pokeapi.co/api/v2/pokemon/" + param.toLowerCase();

  if ($("#searchVal").val() === "") {
    message.textContent = "Enter a pokemon name.";
    return;
  }
  $.getJSON(pokeURL, data => {
    const type = data.types;
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
  if ($("#pkmnName").text() === "" || !$("#levelVal").val()) {
    message.textContent =
      "Search for a pokemon and enter an integer in the level input.";
  } else {
    const addPokemon = {
      sprite: $("#sprite").attr("src"),
      name: $("#pkmnName").text(),
      typeOne: $("#typeOne").text(),
      typeTwo: $("#typeTwo").text(),
      level: $("#levelVal").val()
    };
    $.post("/api/pokemon", addPokemon, clearCard);
    message.textContent =
      $("#pkmnName").text() + " was added to your collection!";
  }
}

function clearMsg() {
  message.textContent = "";
  return;
}

function clearCard() {
  $("#sprite").attr("src", "/js/pokeballimg.png");
  $("#sprite").attr("alt", "Pokeball");
  $("#pkmnName").html("");
  $("#typeOne").html("");
  $("#typeTwo").html("");
  $("#levelVal").val("");
  $("#searchVal").val("");
}

function removePkmn() {
  const id = $(this).data("id");
  $.ajax(`/api/all-pokemon/${id}`, {
    type: "DELETE"
  }).then(() => {
    location.reload();
  });
}

function updatePkmn() {
  const level = $(this)
    .parent()
    .find(".levelInput")
    .val();
  const id = $(this).data("id");
  $.ajax(`/api/all-pokemon/${id}`, {
    type: "PATCH",
    data: JSON.stringify({ level }),
    contentType: "application/json; charset=UTF-8"
  }).then(() => {
    location.reload();
  });
}

$("#searchVal").on("click", clearMsg);
$("#levelVal").on("click", clearMsg);
$("#search").on("click", pokeSearch);
$("#submit").on("click", pokeSubmit);
$(".delete-pkmn").on("click", removePkmn);
$(".update-pkmn").on("click", updatePkmn);
