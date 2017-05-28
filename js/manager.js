
function Battleship() {
  var x = Math.floor(Math.random() * (8 - 0)) + 0;
  var y = Math.floor(Math.random() * (8 - 0)) + 0;
  this.enemyBoat = new Boat([x,y],"N","AlienShip")
  this.myBoat =  new Boat ([5,5],"N", "La Invencible")
}

Battleship.prototype._drawBoard = function () {
  var picBoard = "";

  for (i = 0; i < 8; i++) {
    picBoard = picBoard + "<div class ='row'>";
    for (j = 0; j < 8; j++) {
      picBoard = picBoard + "<div class ='cell " + i + "-" + j + "'></div>"
    }
    picBoard = picBoard + "</div>";
    picBoard += "<div class='clearfix'></div>";
  }

  $("#game-board").html(picBoard)
}

Battleship.prototype._drawBoats = function () {
  var x = this.myBoat.position[0];
  var y = this.myBoat.position[1];

  var cell = $("." + x + "-" + y);

  cell.attr("id", "myBoat")
  var v = this.enemyBoat.position[0];
  var z = this.enemyBoat.position[1];

  var cell = $("." + v + "-" + z);

  cell.attr("id", "enemyBoat")

}
// Battleship.prototype._generateRandomEnemy = function(){
//   var randomPosition = [];
//   };
