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
    //save to database
    console.log($("#level").val());
    $.ajax({
      type: "POST",
      url: "/api/pokemon",
      data: {
        name: data.name,
        types: type[0].type.name + type[1].type.name,
        level: parseInt($("#level").val()),
        image: data.sprites.front_default
      }
    });
  });
}
$("#search").on("click", pokeSearch);