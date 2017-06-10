// <------- EnemyPlay--------->

function Enemyplay(battleShip) {
  this.x = battleShip.myBoat.position[0];
  this.y = battleShip.myBoat.position[1];
  this.q = Math.floor(Math.random() * (8 - 1)) + 1;
  this.w = Math.floor(Math.random() * (8 - 1)) + 1;
}
Enemyplay.prototype._enemyPhoto = function () {
  var snd = new Audio("alienmove.mp3");
  var photo = document.getElementsByClassName("playWater");
  snd.play();
  snd.currentTime = 0
  document.getElementById("screen").src = "./css/images/672.gif";
  setTimeout(function () {
    document.getElementById("screen").src = "./css/images/myBoat.jpeg";
  }, 6000);
  this._pingEnemy();
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
      $("." + (this.x + i) + "-" + (this.y + j)).addClass("pingGreen")
    }
    setInterval(function () {
      $(".pingGreen").removeClass("pingGreen");
    }, 5000);
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
    }, 5000);
  }
  setTimeout(function () {
    document.getElementById("screen").src = "./css/images/myBoat.jpeg";
  }, 3000);
  console.log("tu turno");
}

Enemyplay.prototype._fireEnemy = function () {

  document.getElementById("screen").src = "./css/images/673.gif";
  setTimeout(function () {
    document.getElementById("screen").src = "./css/images/myBoat.jpeg";
  }, 6000);

  // var that = this;

  var choose = document.querySelectorAll("#pingGreen");
  var objetive = choose[Math.floor(Math.random() * choose.length)];
  console.log(this.x, this.y)

  if (objetive.classList[1] === (this.x + "-" + this.y)) {
    alert("You lost");
  } else {
    console.log("your turn");
  }
}



// <------- EnemyPlay2--------->

function Enemyplay2(battleShip) {
  this.x = battleShip.myBoat.position[0];
  this.y = battleShip.myBoat.position[1];
}
Enemyplay2.prototype._enemyPhoto = function () {
  var snd = new Audio("alienmove.mp3");
  var photo = document.getElementsByClassName("playWater");
  snd.play();
  snd.currentTime = 0
  document.getElementById("screen").src = "./css/images/673.gif";
  setTimeout(function () {
    document.getElementById("screen").src = "./css/images/myBoat.jpeg";
  }, 4000);
  this._fireEnemy();
}

Enemyplay2.prototype._fireEnemy = function () {

  // document.getElementById("screen").src = "./css/images/myBoat.jpeg";
  //   setTimeout(function () {
  //     document.getElementById("screen").src = "./css/images/aliensAttack.gif";
  //   }, 6000);

  var that = this;

  var choose = document.querySelectorAll("#pingRed");
  var objetive = choose[Math.floor(Math.random() * choose.length)];

  console.log(objetive);

  if (objetive.classList[1] === this.x + "-" + this.y) {
    alert("You lost");
  } else {
    console.log("your turn");
  }

}


