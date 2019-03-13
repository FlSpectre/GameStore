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

var tab = [
  "game_name",
  "game_img",
  "game_resume",
  "game_commentary",
  "game_note",
  "category_name"
];

function send() {
  console.log("allo");
  var game_name = document.getElementById("game_name").value;
  var game_img = document.getElementById("game_img").value;
  var game_resume = document.getElementById("game_resume").value;
  var game_commentary = document.getElementById("game_commentary").value;
  var game_note = document.getElementById("game_note").value;
  var category_name = document.getElementById("category_name").value;
  // var tab = [
  //   game_name,
  //   game_img,
  //   game_resume,
  //   game_commentary,
  //   game_note,
  //   category_name
  // ];

  // for (var i = 0; i < tab.length; i++) {
  //   if (tab[i].value == null) {
  //     console.log("Fait un effort et rempli tout");
  //   }
  // }
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
