function pokeSearch() {
  const param = $("#searchVal").val();
  const pokeURL = "https://pokeapi.co/api/v2/pokemon/" + param.toLowerCase();

  if ($("#searchVal").val() === "") {
    message.textContent = "Enter a pokemon name.";
    return;
  }
  $.getJSON(pokeURL, data => {
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
    console.log(addPokemon);
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
  $("#sprite").attr(
    "src",
    "https://lh3.googleusercontent.com/proxy/vxURY5L6dxUj9JOB6upfgkRNJBDG4qZKK3cihzzigye60zCX2XoBMka8YWNQ6xeZpqPv-4PAUS-pA_hVvsiNnI7cFYz6xbjGiHl9hpV7zVAm9SwKqEob"
  );
  $("#sprite").attr("alt", "Pokeball");
  $("#pkmnName").html("");
  $("#typeOne").html("");
  $("#typeTwo").html("");
  $("#levelVal").val("");
  $("#searchVal").val("");
}

$("#searchVal").on("click", clearMsg);
$("#levelVal").on("click", clearMsg);
$("#search").on("click", pokeSearch);
$("#submit").on("click", pokeSubmit);
//animates our seach pokemon buttonwhen clicked on
$("#search").click(() => {
  $("#search")
    .snabbt({
      position: [0, 0, 0],
      rotation: [0, 0, 2 * Math.PI],
      easing: "spring",
      springConstant: 0.3,
      springDeceleration: 0.8
    })
    .snabbt({
      position: [0, 0, 0],
      easing: "spring",
      springConstant: 0.3,
      springDeceleration: 0.8
    });
});
