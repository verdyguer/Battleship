function Boat(position,direction,name) {
  this.position = position;
  this.direction = direction;
  this.name = name;
}

Boat.prototype.move = function(rumbo){
  if (rumbo==="f"){
    this._goForward();
  }
  else if (rumbo==="b"){
    this._goBack();
  }
  else if (rumbo==="l"){
    this._goLeft();
  }
  else if (rumbo==="r"){
    this._goRight();
  }
}

Boat.prototype._goForward = function(){
  if (this.position[0]===0){
    return
  }

  this.position[0] = this.position[0] - 1
}
Boat.prototype._goBack = function(){
  if (this.position[0]===7){
    return
  }

  this.position[0] = this.position[0] + 1
}
Boat.prototype._goLeft = function(){
  console.log(this.position[1]);
  if (this.position[1]===0){
    return
  }
  this.position[1] = this.position[1] - 1
}
Boat.prototype._goRight = function(){
  if (this.position[1]===7){
    return
  }

  this.position[1] = this.position[1] + 1
}