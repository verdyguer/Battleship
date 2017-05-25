
function Battleship () {
  this.enemyBoat = {
    position: [1,3],
    direction: 'N'
  };

  this.myBoat = {
    position: [5,4],
    direction: 'N'
  };
}

Battleship.prototype._drawBoard = function() {
  var picBoard = "";

  for(i=0; i < 8; i++) {
      picBoard = picBoard + "<div class ='row'>";
    for(j=0; j < 8; j++) {
      picBoard = picBoard + "<div class ='cell " + i + "-" + j + "'></div>"
    }
    picBoard = picBoard + "</div>";
    picBoard += "<div class='clearfix'></div>";
  }

  $("#game-board").html(picBoard)

}

Battleship.prototype._drawBoats= function () {
  var x = this.myBoat.position[0];
  var y = this.myBoat.position[1];

  var cell = $("."+ x +"-" + y);
  
  cell.attr("id","myBoat")
 var v = this.enemyBoat.position[0];
  var z = this.enemyBoat.position[1];

  var cell = $("."+ v +"-" + z);
  
  cell.attr("id","enemyBoat")

}
// Battleship.prototype._newBoatsPosition= function () {
//   var newMyboatX = 
  
//   jprompt("Add new myBoat position",)

// }


/*

<div class="row">
  <div class="cell 0-0"></div>
  ...
</div>
...


*/
