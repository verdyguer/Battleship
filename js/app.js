var battleShip;

window.onload = function () {
  battleShip = new Battleship();
  battleShip._drawBoard();
  battleShip._drawBoats();
  // battleShip._drawPing();

  document.addEventListener("keydown", moveKeys);

  function moveKeys(event) {
    var keys = [37, 38, 39, 40];

    if (keys.indexOf(event.keyCode) < 0) {
      return;
    }

    switch (event.keyCode) {
      case 38: battleShip.myBoat.move("f");break;
      case 37: battleShip.myBoat.move("l"); break;
      case 39: battleShip.myBoat.move("r"); break;
      case 40: battleShip.myBoat.move("b"); break;
    }
  }
  
}

