// $.post

//-----------------------------------------------------
// ON utilise un CLIENT HTTP
// Une librairie qui permet de requeter des sites
// via des methodes/verbes HTTP -> GET / POST...
// Ici on va utiliser jquery, lmais il y en a plein d'autres (axios, $http, superagent, etc...)

// $.get c'est un peu comme un telephone portable qu'on donne a notre front
// Par contre quand on compose le numero on est obligé de mettre le 06
// -> http://localhost:3000
$.get("http://localhost:3000", function(response) {
  response.forEach(function(game) {
    const div = document.createElement("div");
    div.innerHTML += "game name : " + game.game_name + "<br>";
    div.innerHTML += "game img : " + game.game_img + "<br>";
    div.innerHTML += "game resume : " + game.game_resume + "<br>";
    div.innerHTML += "game commentary : " + game.game_commentary + "<br>";
    div.innerHTML += "game note : " + game.game_note + "<br>" + "<br>" + "<br>";

    document.body.appendChild(div);
  });
});

function send() {
  var game_name = document.querySelector("#game_name").value;
  var game_img = document.querySelector("#game_img").value;
  var game_resume = document.querySelector("#game_resume").value;
  var game_commentary = document.querySelector("#game_commentary").value;
  var game_note = document.querySelector("#game_note").value;
  var category_name = document.querySelector("#category_name").value;
  console.log(game_name);
  $.post(
    "http://localhost:3000",
    {
      game_name: game_name,
      game_img: game_img,
      game_resume: game_resume,
      game_comentary: game_commentary,
      game_note: game_note,
      category_name: category_name
    },
    function(response) {
      console.log(response);
    }
  );
}
