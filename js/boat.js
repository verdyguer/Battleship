

function Boat(position,direction,name) {
  this.position = position;
  this.direction = direction;
  this.name = name;
}

Boat.prototype.move = function(rumbo){
  if (rumbo==="f"){
    this._goForward();
    this._reDrawBoat();

  }
  else if (rumbo==="b"){
    this._goBack();
    this._reDrawBoat();
    
  }
  else if (rumbo==="l"){
    this._goLeft();
    this._reDrawBoat();
   
  }
  else if (rumbo==="r"){
    this._goRight();
    this._reDrawBoat();
  }
}

Boat.prototype._goForward = function(){
  if (this.position[0]===0){
    return;
  }

  this.position[0] = this.position[0] - 1;
}
Boat.prototype._goBack = function(){
  if (this.position[0]===8){
    return;
  }

  this.position[0] = this.position[0] + 1;
}
Boat.prototype._goLeft = function(){
  console.log(this.position[1]);
  if (this.position[1]===0){
    return;
  }
  this.position[1] = this.position[1] - 1;
}
Boat.prototype._goRight = function(){
  if (this.position[1]===8){
    return;
  }

  this.position[1] = this.position[1] + 1;
}

Boat.prototype._reDrawBoat = function(){
  
  $("#myBoat").attr("id","")

  var x = this.position[0];
  var y = this.position[1];
 
  var cell = $("." + x + "-" + y);
  
  cell.attr("id", "myBoat")
   
}
