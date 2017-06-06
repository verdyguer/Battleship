// <------- EnemyPlay--------->

function Enemyplay(battleShip) {
  this.x = battleShip.myBoat.position[0];
  this.y = battleShip.myBoat.position[1];
  this.q = Math.floor(Math.random() * (9 - 0)) + 0;
  this.w = Math.floor(Math.random() * (9 - 0)) + 0;
}

Enemyplay.prototype._pingEnemy = function () {
  if ((this.q === this.x || this.q === this.x - 1 || this.q === this.x + 1) && (this.w === this.y || this.w === this.y - 1 || this.w === this.y + 1)) {
    this._drawPingGreen();
  } else {
    this._drawPingOrange();
    console.log("tu turno");
  }
}
Enemyplay.prototype._drawPingGreen = function () {
 
  for (i = -1; i <= 1; i++) {
    for (j = -1; j <= 1; j++) {
      $("." + (this.x + i) + "-" + (this.y + j)).attr("id", "pingGreen")
    }
  }
  this._fireEnemy();
}

Enemyplay.prototype._drawPingOrange = function () {

  for (i = -1; i <= 1; i++) {
    for (j = -1; j <= 1; j++) {
      $("." + (this.q + i) + "-" + (this.w + j)).addClass("pingOrange");

    }
    setInterval(function () {
      $(".pingOrange").removeClass("pingOrange");
    }, 2000);
  }
  console.log("tu turno");
}




Enemyplay.prototype._selecTarget = function () {

  var that = this;

  var x = document.querySelectorAll("#pingGreen");

  $(x).click(function (event) {
    if (this.classList[1] === (this.x + "-" + this.y)) {
      alert("You lost");
    } else {
  
      console.log("your tuen");
    }
  })
}