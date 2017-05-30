
function Battleship() {
  var x = Math.floor(Math.random() * (9 - 0)) + 0;
  var y = Math.floor(Math.random() * (9 - 0)) + 0;
  var v = Math.floor(Math.random() * (9 - 0)) + 0;
  var z = Math.floor(Math.random() * (9 - 0)) + 0;
  this.enemyBoat = new Boat([v, z], "N", "AlienShip")
  this.myBoat = new Boat([x, y], "N", "La Invencible")
}

Battleship.prototype._drawBoard = function () {
  var picBoard = "";

  for (i = 0; i < 9; i++) {
    picBoard = picBoard + "<div class ='row'>";
    for (j = 0; j < 9; j++) {
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

Battleship.prototype._ping = function () {
  console.log(this);
  var x = this.myBoat.position[0];
  var y = this.myBoat.position[1];
  var v = this.enemyBoat.position[0];
  var z = this.enemyBoat.position[1];
  console.log(x, y);
  console.log(v, z);
  if ((v === x || v === x - 1 || v === x + 1) && (z === y || z === y - 1 || z === y + 1)) {
    this._drawPing();
  } else {
    console.log("la maquina juega");
  }
}



// Battleship.prototype._crash = function () {
//   var x = this.myBoat.position[0];
//   var y = this.myBoat.position[1];
//   var v = this.enemyBoat.position[0];
//   var z = this.enemyBoat.position[1];
//   console.log(x, y);
//   console.log(v, z);
//   if ((v === x) && (z === y)) {
//     console.log("you have crashed");
//   }
// }

Battleship.prototype._drawPing = function () {
  console.log("dsdfg");
  var x = this.myBoat.position[0];
  var y = this.myBoat.position[1];

  for (i = -1; i <= 1; i++) {
    for (j = -1; j <= 1; j++) {
     $("." +(x+ i) + "-" +(y+ j)).attr("id","ping")
    }
  }

}

