// <------- EnemyPlay--------->

function Enemyplay(position) {
  var q = Math.floor(Math.random() * (9 - 0)) + 0;
  var w = Math.floor(Math.random() * (9 - 0)) + 0;
  this.enemyFire = new Fire(q,w) 
}

Enemyplay.prototype._pingEnemy = function () {
  var x = this.myBoat.position[0];
  var y = this.myBoat.position[1];

  console.log(q, w);
  if ((q === x || q === x - 1 || q === x + 1) && (w === y || w === y - 1 || w === y + 1)) {
    this._drawPingGreen();
  } else {
    this._drawPingOrange();
    console.log("tu turno");
  }
}
Enemyplay.prototype._drawPingGreen = function () {
  var x = this.myBoat.position[0];
  var y = this.myBoat.position[1];
  for (i = -1; i <= 1; i++) {
    for (j = -1; j <= 1; j++) {
      $("." + (x + i) + "-" + (y + j)).attr("id", "pingGreen")
    }
  }
  this._selecTarget();
}

Enemyplay.prototype._drawPingOrange = function () {
  var q = this.myBoat.position[0];
  var w = this.myBoat.position[1];
  for (i = -1; i <= 1; i++) {
    for (j = -1; j <= 1; j++) {
      $("." + (x + i) + "-" + (y + j)).addClass("pingOrange");

    }
    setInterval(function () {
      $(".pingOrange").removeClass("pingOrange");
    }, 2000);
  }
  console.log("efecto disparo enemigo");
}



