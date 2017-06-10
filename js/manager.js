



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



}

Battleship.prototype.ping = function () {
  var x = this.myBoat.position[0];
  var y = this.myBoat.position[1];
  var v = this.enemyBoat.position[0];
  var z = this.enemyBoat.position[1];
  console.log(x, y);
  console.log(v, z);
  if ((v === x || v === x - 1 || v === x + 1) && (z === y || z === y - 1 || z === y + 1)) {
    this._drawPingRed();
  } else {
    this._drawPingYellow();
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

Battleship.prototype._drawPingRed = function () {
  var x = this.myBoat.position[0];
  var y = this.myBoat.position[1];
  for (i = -1; i <= 1; i++) {
    for (j = -1; j <= 1; j++) {
      $("." + (x + i) + "-" + (y + j)).attr("id", "pingRed")
    }
    setInterval(function () {
      $(".pingRed").removeClass("pingRed");
    }, 3000);
  }
   document.getElementById("consola").innerHTML = "It´s your opportunity to demostrate who own this planet";
     setTimeout(function () {
    document.getElementById("consola").innerHTML= "";
  }, 3000);
  this._selecTarget();


}


Battleship.prototype._drawPingYellow = function () {
  var snd = new Audio("Sonar.wav");
  var x = this.myBoat.position[0];
  var y = this.myBoat.position[1];
  for (i = -1; i <= 1; i++) {
    for (j = -1; j <= 1; j++) {
      snd.play();
      snd.currentTime = 0
      $("." + (x + i) + "-" + (y + j)).addClass("pingYellow");
    }
    setInterval(function () {
      $(".pingYellow").removeClass("pingYellow");
    }, 3000);
  }
  this._playWater();
}


Battleship.prototype._selecTarget = function () {
  var v = this.enemyBoat.position[0];
  var z = this.enemyBoat.position[1];
  var that = this;

  var x = document.querySelectorAll("#pingRed");

  $(x).click(function (event) {
    that._fireGun();

    if (this.classList[1] === (v + "-" + z)) {

      var cell = $("." + v + "-" + z);
      cell.attr("id", "enemyBoat")
      alert("You have save the world from an alien invasion");
      location.reload();
    } else {
      var enemyplay = new Enemyplay2(that);
      setTimeout(function () {
        enemyplay._enemyPhoto();

      }, 4500);


      //    setInterval(function () {
      //   $(".pingRed").removeClass("pingRed");
      // }, 3000);

    }

  })

}
Battleship.prototype._playWater = function () {
  var that = this;
  var photo = document.getElementsByClassName("playWater");
  document.getElementById("screen").src = "./css/images/agua.gif";
  setTimeout(function () {
    document.getElementById("screen").src = "./css/images/AlienShip.jpg";
  }, 4500);
  setTimeout(function () {
    var enemyplay = new Enemyplay(that);
    enemyplay._enemyPhoto();
  }, 4500);

}

Battleship.prototype._fireGun = function () {
  var snd1 = new Audio("machine gun.mp3");

  var photo = document.getElementsByClassName("playWater");
  document.getElementById("screen").src = "./css/images/671.gif";
  snd1.play();
  snd1.currentTime = 1
  setTimeout(function () {
    document.getElementById("screen").src = "./css/images/AlienShip.jpg";
  }, 4500);
}





