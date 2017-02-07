function Card(suit, value){
  this.suit = suit;
  this.value = value;
  this.image = "cards-png/" + suit + value + ".png";
}

function Deck(){
  var self = this;

  var makeDeck = function(){
    var cards = [];
    var suits = ["h", "s", "d", "c"];
    var values = ["1","2","3","4","5","6","7","8","9","10","j","q","k"];
    for (var i = 0; i < suits.length; i++){
      for (var j = 0; j < values.length; j++){
        var card = new Card(suits[i], values[j]);
        cards.push(card);
      }
    }
    return cards;
  };

  this.cards = makeDeck();

  this.reset = function(){
    this.cards = [];
    this.cards = makeDeck();
    return self;
  };

  this.shuffle = function(){
    var m = self.cards.length, t, i;
    while (m) {
      i = Math.floor(Math.random() * m--);
      t = self.cards[m];
      self.cards[m] = self.cards[i];
      self.cards[i] = t;
    }
    return this;
  };

  this.deal = function(){
    self.shuffle();
    var dealt = self.cards[0];
    self.cards.shift();
    return dealt;
  };
}

function Player(name){
  var self = this;
  this.name = name;
  this.hand = [];
  this.takeCard = function(deck){
    self.hand.push(deck.deal());
  };
  this.discard = function(card){
    var index = self.hand.indexOf(card);
    if (index < -1){
      self.hand.splice(index, 1);
    }
  };
}
var myDeck = new Deck();
var player_one = new Player("player_one")
var player_two = new Player("player_two")

$(document).ready(function(){
  $("#button").click(customObject.onClick.bind(customObject, "BINDD"))
  $("#select_players").click(function(){
    player_one.name = $("#select_one").val();
    player_two.name = $("#select_two").val();
    $("#player_one").append("<h2>" + player_one.name + "</h2><div class='cards'></div>");
    $("#player_two").append("<h2>" + player_two.name + "</h2><div class='cards'></div>");
    $("#player_select").hide()
    $("#game").show()
  });
  $("#deck").click(function(){
    if(myDeck.cards.length > 0){
      player_one.takeCard(myDeck);
      var image = player_one.hand[player_one.hand.length - 1].image
      $("#player_one .cards").append("<img class='player_one card' src='" + image + "'>")
      player_two.takeCard(myDeck);
      image = player_two.hand[player_two.hand.length - 1].image
      $("#player_two .cards").append("<img class='player_two card' src='" + image + "'>")
    }
  })
  $("#reset").click(function(){
    myDeck.reset().shuffle()
    $("#player_one .cards").html("")
    $("#player_two .cards").html("")
  });
});
$(document).on('click', '.card', function(){
  $(this).hide();
  var image = $(this).attr('src')
  if($(this).hasClass('player_one')){
    var discarded = $.grep(player_one.hand, function(e){return e.image === image});
    player_one.discard(discarded)
  }
  else{
    var discarded = $.grep(player_two.hand, function(e){return e.image === image});
    player_two.discard(discarded)
  }
})
var customObject = {
  name:'California, Eureka',
  onClick:function(myParam){
    console.log("I've been clicked");
    console.log(myParam, "I've been passed by bind");
    console.log(this.name);
  }
}
var newObject = {
  name:"West Virginia,  Montani semper liberi"
}
$("button").click(customObject.onClick.bind(customObject));
