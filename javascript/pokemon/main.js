var game = {
  players: [],
  addPlayer: function(name){
    var new_player = playerConstructor(name);
    game.players.push(new_player);
    return game;
  }
};

function playerConstructor(name){
  var player = {};
  player.name = name;
  player.hand = [];
  player.addCard = function(card){
    player.hand.push(card);
  };
  return player;
}

// function cardConstructor(pokemon){
//   var card = {};
//   card.name = pokemon.name;
//   card.attack = pokemon.attack;
//   card.defense = pokemon.defense;
//   card.image = "pokeapico/media/img/" + pokemon.pkdx_id + ".png";
//   return card;
// }
//
// $(document).ready(function(){
//   $('#select').click(function(){
//     var name = $('#player').val();
//     game.addPlayer(name);
//     var html = '<h2>' + name + ': </h2><div style="border: 2px solid red" id="' + name + '"></div>'
//     $('#players').append(html)
//   })
//   $('#done').click(function(){
//     $('#choose').hide()
//     var counter = 0;
//     for (var i = 0; i < game.players.length; i++){
//       var number = (Math.trunc((Math.random() * 151) + 1))
//       var api = "http:pokeapi.co/api/v1/pokemon/" + number + "/"
//       var winner;
//       $.get(api, function(res){
//           // var new_card = cardConstructor(res);
//           game.players[counter].addCard(res)
//           id = "#" + game.players[counter].name
//           var show_card = "<h3>" + game.players[counter].hand[0].name + "</h3><h4>Attack:" + game.players[counter].hand[0].attack + "</h4>"
//           $(id).html(show_card)
//           var new_attack = game.players[counter].hand[0].attack;
//           if (counter === 0){
//             winner = game.players[0];
//           }
//           else if (new_attack > winner.hand[0].attack){
//             winner = game.players[counter]
//             console.log(winner);
//           }
//           counter++;
//           console.log(winner);
//           if (counter === game.players.length){
//             $('#winner').html("<h2>Winner:" + winner.name + "</h2>")
//           }
//       })
//     }
//   });
// });

$(document).ready(function(){
  $("#select").click(function(){
    var name = $("#player").val();
    game.addPlayer(name);
    var html = "<div class='pokemon'><h2>" + name + ": </h2><div id=\"" + name + "\"></div></div>";
    $("#players").append(html);
  });
  $("#done").click(function(){
    $("#choose").hide();
    var requests = [];
    for (let i = 0; i < game.players.length; i++){
      var number = (Math.floor((Math.random() * 151) + 1));
      var api = "http:pokeapi.co/api/v1/pokemon/" + number + "/";
      requests.push(
        new Promise(
          function(resolve, reject){
            $.get(api, function(res){
              resolve(res);
            }) .fail(function(err){
              reject(err);
            });
          }
        )
      );
    }
    Promise.all(requests)
    .then(cards=>{
      for(let i = 0; i < cards.length; i++){
        game.players[i].addCard(cards[i]);
        var id = "#" + game.players[i].name;
        var show_card = "<h3>" + game.players[i].hand[0].name + "</h3><h4>Attack:" + game.players[i].hand[0].attack + "</h4><h4>Defense:" + game.players[i].hand[0].defense + "</h4><img id='" + game.players[i].hand[0].pkdx_id + "' src='http://pokeapi.co/media/img/" + game.players[i].hand[0].pkdx_id + ".png'>";
        $(id).html(show_card);
        $("#winner").html("<button id='fight'>Fight</button>");
      }
    }).catch(err=>{
      console.log(err);
    });
  });
});
function strength(card){
  return (card.attack + card.defense)/2;
}
$(document).on("click", "#fight", function(){
  var max = 0;
  var pokemon = [game.players[0].hand[0].pkdx_id];
  for(let i = 1; i < game.players.length; i++){
    if(strength(game.players[i].hand[0]) > strength(game.players[max].hand[0])){
      max = i;
    }
    pokemon.push(game.players[i].hand[0].pkdx_id);
  }
  $("img").css("transform", "rotate(180deg)");
  var winner_id = "#" + game.players[max].hand[0].pkdx_id;
  $(winner_id).css("transform", "scale(3, 3)");
  var winner = "<h1>" + game.players[max].name + " wins!!</h1>";
  $("#winner").html(winner);
});
