// $.get("http://localhost:3000/categories", function(res) {
//   var db = res;
//   make_item(db);
// });

function cat_action() {
  $.get("http://localhost:3000/Action", function(res) {
    var db = res;
    make_item(db);
  });
}

function cat_fighting() {
  $.get("http://localhost:3000/Fighting", function(res) {
    var db = res;
    make_item(db);
  });
}

function cat_rpg() {
  $.get("http://localhost:3000/RPG", function(res) {
    var db = res;
    make_item(db);
  });
}

function cat_arcade() {
  $.get("http://localhost:3000/Arcade", function(res) {
    var db = res;
    make_item(db);
  });
}

function cat_moba() {
  $.get("http://localhost:3000/MOBA", function(res) {
    var db = res;
    make_item(db);
  });
}

function cat_fps() {
  $.get("http://localhost:3000/FPS", function(res) {
    var db = res;
    make_item(db);
  });
}

function make_item(db) {
  db.forEach(function(game) {
    var games = document.createElement("div");
    games.setAttribute("class", "games_of_the_moment");
    var fiche = document.createElement("div");
    fiche.setAttribute("class", "fiche");
    var titlesGames = document.createElement("h1");
    titlesGames.setAttribute("class", "titlesGOTM");
    titlesGames.textContent = game.game_name;
    var imagesGames = document.createElement("img");
    imagesGames.setAttribute("src", game.game_img);
    var synopsisGames = document.createElement("p");
    synopsisGames.setAttribute("class", "synopsis");
    synopsisGames.textContent = game.game_resume;

    container.appendChild(games);
    games.appendChild(fiche);
    fiche.appendChild(titlesGames);
    fiche.appendChild(imagesGames);
    fiche.appendChild(synopsisGames);
  });
}

function get_db() {
  let input = document.getElementById("search").value;
  $.get("http://localhost:3000/"),
    function(res) {
      const db = res;
      search(db, input);
    };
}

function search(game, str) {
  let j = 0;
  for (let x = 0; game[x]; x++) {
    j = 0;
    for (let i = 0; str[i]; i++) {
      if (str[i] == game[x].game_name[i]) {
        j++;
      }
    }
    if (j == str.length) {
      console.log("index valide : ", x);
      //make_item(game[x]);
    }
  }
}

var db = [
  {
    game_id: 1,
    game_name: "Super Smash Bros : Ultimate",
    game_img: "images/SSBU.png",
    game_resume:
      "Super Smash Bros Ultimate is a Fighting game on Switch. This Ultimate opus brings together all the fighters already appeared in the history of Super Smash Bros. 75 playable characters will be available by counting the trainer, as well as all his Pokémon...",
    game_commentary:
      "I feel the same way as with Melee during my childhood. The game is complete, beautiful, funny addictive and fun to play. The OST is masterful, the game modes are legion, the characters are all there, and just the game out there is already announced a new! In short, whether you are a neophyte or a regular, go for it because in both cases you will not regret your purchase. This is THE Switch game of the year.",
    game_note: "16.2",
    game_price: "20€",
    gotm: 1,
    category_name: "Fighting"
  },
  {
    game_id: 2,
    game_name: "The Last of Us",
    game_img: "images/TLOU.jpg",
    game_resume:
      "The survival action The Last of Us on PS3 follows Joel and Ellie across the United States. The two will have to help each other to survive a mysterious plague. Nature begins to appropriate the abandoned cities and the few survivors kill each other to recover the little food and weapons still present.",
    game_commentary:
      "The Last of Us is a must have on PS3. Innovative, the atmosphere is superb. Endearing characters, a narrative very well built. The stress is at the rendezvous knowing that we must manage its ammunition sparingly.",
    game_note: "16.8",
    game_price: "8€",
    gotm: 1,
    category_name: "Action"
  },
  {
    game_id: 3,
    game_name: "League of Legends",
    game_img: "images/LOL.jpg",
    game_resume:
      "League of Legends is a MOBA, a multiplayer online battle arena. In the classic mode, two teams of five players compete in games that last on average between 40 minutes and the goal is to destroy the enemy base. Playing in a hero-fantasy universe, each player embodies a different champion, with unique abilities, which he chooses at the beginning of the game. Random modes are also present, as well as seasonal events that bring a breath of novelty.",
    game_commentary:
      "A very good game in F2P, everything is graphic, strategy, number of characters ... But unfortunately, the experience is not always happy, the fault of an absolutely disastrous community: in addition to insults and intolerance it is forbidden to be a beginner to this game ... It reminds me of a well-known MMO but this is another story.",
    game_note: "15.7",
    game_price: "Gratuit",
    gotm: 1,
    category_name: "MOBA"
  },
  {
    game_id: 4,
    game_name: "Grand Theft Auto V",
    game_img: "images/GTA.png",
    game_resume:
      "Grand Theft Auto (GTA) open-world action-adventure game V puts you in the shoes of three new characters: Michael, Trevor and Franklin. The latter live in Los Santos, a town in the San Andreas region. Braking and missions are part of the daily life of the player who can also coexist with 15 other users in this persistent universe if he plays on PS3 / Xbox 360 or 29 if he plays on PS4 / Xbox One / PC.",
    game_commentary:
      "Well be serious must stop right now, this game does not deserve in any case a 19/20. The graphics: so yes certainly it's nice, there is not too much slowing except for me when we move from one area to another but it may come from home (whatever I wonder how saw the config that I'm doing .....)",
    game_note: "18",
    game_price: "30€",
    gotm: 0,
    category_name: "Action"
  },
  {
    game_id: 5,
    game_name: "Dead or Alive 6",
    game_img: "images/GTA.png",
    game_resume:
      "Grand Theft Auto (GTA) open-world action-adventure game V puts you in the shoes of three new characters: Michael, Trevor and Franklin. The latter live in Los Santos, a town in the San Andreas region. Braking and missions are part of the daily life of the player who can also coexist with 15 other users in this persistent universe if he plays on PS3 / Xbox 360 or 29 if he plays on PS4 / Xbox One / PC.",
    game_commentary:
      "Well be serious must stop right now, this game does not deserve in any case a 19/20. The graphics: so yes certainly it's nice, there is not too much slowing except for me when we move from one area to another but it may come from home (whatever I wonder how saw the config that I'm doing .....)",
    game_note: "18",
    game_price: "30€",
    gotm: 0,
    category_name: "Action"
  },
  {
    game_id: 6,
    game_name: "Pac-Man",
    game_img: "images/PACMAN.png",
    game_resume:
      "Pac-Man on Commodore 64 is the adaptation of one of the most successful arcades in the history of video games. You control Pac-Man, a small yellow ball croque-tout, in labyrinths populated with colorful ghosts. The goal of the game is to eat all the little yellow dots. The slightest contact with one of the ectoplasms is fatal.",
    game_commentary: "This game is amazing.",
    game_note: "15",
    game_price: "30€",
    gotm: 0,
    category_name: "Arcade"
  },
  {
    game_id: 7,
    game_name: "Final Fantasy XV",
    game_img: "images/FF.png",
    game_resume:
      "Formerly called Final Fantasy XIII Versus, Final Fantasy XV is a J-RPG from the famous Final Fantasy series. The player plays Noctis, heir to the king, accompanied by his friends, in a modern, dark, and fantastic world",
    game_commentary:
      "I'm not going to go four ways: the PC version of Final Fantasy XV is posed as the ultimate version to acquire for anyone who has not yet jumped (for lack of a persistent indecision) or just for those seeking to afford the best experience available at the moment.",
    game_note: "18",
    game_price: "30€",
    gotm: 0,
    category_name: "RPG"
  },
  {
    game_id: 8,
    game_name: "Call of Duty : Black Ops III",
    game_img: "images/CODBO3.png",
    game_resume:
      "Call of Duty: Black Ops III is the new entry in the famous license of Activison. It promises a futuristic universe as we have seen in the past but without the jetpacks. We will also have the opportunity to survey a multiplayer center of the experience and bring back several cards adored by fans.",
    game_commentary: "This game is good.",
    game_note: "16",
    game_price: "30€",
    gotm: 0,
    category_name: "FPS"
  }
];
