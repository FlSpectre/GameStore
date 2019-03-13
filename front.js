$.get("http://localhost:3000/", function(res) {
  var db = res;
  make_gotm(db);
});

var container = document.getElementById("container");

var header = document.createElement("header");
var title = document.createElement("h1");
title.setAttribute("id", "title");
title.textContent = "GameStore";

var paragraphe = document.createElement("p");
paragraphe.setAttribute("class", "paragraphe");
paragraphe.innerHTML =
  "Do business on games, extensions, pre-orders and more. <br> Even more discounts for GameStore Plus subscribers.";

var logo = document.createElement("img");
logo.setAttribute("id", "logo");
logo.setAttribute("src", "images/gamestore_logo.png");

var basket = document.createElement("img");
basket.setAttribute("id", "basket");
basket.setAttribute("src", "images/shopping_basket.png");
var namelist = ["Home", "Games", "GameStore Plus", "Store", "Help"];
var ul = document.createElement("ul");

container.appendChild(ul);
ul.appendChild(logo);
ul.appendChild(basket);

var catego = ["Action", "Fighting", "RPG", "Arcade", "MOBA", "MMORPG", "FPS"];
var ref = ["", "", "", "", "", "", ""];

for (let i = 0; i < 5; i++) {
  var list = document.createElement("li");
  if (i != 1) {
    var a = document.createElement("a");
    a.setAttribute("href", "#");
    list.setAttribute("class", "list");
    a.textContent = namelist[i];
    list.appendChild(a);
  }
  if (i == 1) {
    var didiv = document.createElement("div");
    didiv.setAttribute("id", "div_li");

    var non = document.createElement("a");
    non.setAttribute(
      "href",
      "/home/spectre/Bureau/GameStore2/GameStore/games.html"
    );
    non.setAttribute("class", "dropbtn");
    non.textContent = "GAMES";
    list.appendChild(non);
    list.setAttribute("class", "dropdown list");
    var div_drop = document.createElement("div");
    div_drop.setAttribute("class", "dropdown-content");
    list.appendChild(div_drop);
    for (var j = 0; j < catego.length; j++) {
      var oui = document.createElement("a");
      oui.setAttribute(
        "href",
        "/home/spectre/Bureau/GameStore2/GameStore/games.html"
      );
      oui.setAttribute("onclick", catego);
      oui.textContent = catego[j];
      div_drop.appendChild(oui);
    }
  }
  ul.appendChild(list);
}

console.log(namelist);

basket.addEventListener("click", function() {
  btnBasket();
});

container.appendChild(header);

ul.appendChild(list);
header.appendChild(title);
header.appendChild(paragraphe);

var basket = document.createElement("img");
basket.setAttribute("id", "basket");
basket.setAttribute("src", "images/shopping_basket.png");
var gotm = document.createElement("div");
gotm.setAttribute("id", "gotm");

container.appendChild(gotm);

var games_of_the_moment = document.createElement("h1");
games_of_the_moment.setAttribute("id", "title_gotm");
games_of_the_moment.textContent = "Games Of The Moment";

var div_gotm = document.createElement("div");
div_gotm.setAttribute("id", "div_gotm");
gotm.appendChild(games_of_the_moment);
gotm.appendChild(div_gotm);

function make_gotm(db) {
  db.forEach(function(game) {
    if (game.gotm == 1) {
      var games = document.createElement("div");
      games.setAttribute("class", "games_of_the_moment");
      var fiche = document.createElement("div");
      fiche.setAttribute("class", "fiche");
      var titlesGames = document.createElement("h1");
      titlesGames.setAttribute("class", "titlesGOTM");
      titlesGames.textContent = game.game_name;
      var divImages = document.createElement("div");
      divImages.setAttribute("class", "div_images");
      var imagesGames = document.createElement("img");
      imagesGames.setAttribute("src", game.game_img);
      var synopsisGames = document.createElement("p");
      synopsisGames.setAttribute("class", "synopsis");
      synopsisGames.textContent = game.game_resume;
      var notesGames = document.createElement("p");
      notesGames.setAttribute("class", "note");
      notesGames.textContent = "Note : " + game.game_note;

      container.appendChild(games);
      games.appendChild(fiche);
      fiche.appendChild(titlesGames);
      fiche.appendChild(divImages);
      fiche.appendChild(imagesGames);
      divImages.appendChild(synopsisGames);
      divImages.appendChild(notesGames);
      div_gotm.appendChild(games);
    }
  });
}
