function Position(x,y,z) {
  this.x = parseInt(x);
  this.y = parseInt(y);
  this.z = parseInt(z);
};

Position.prototype.equals = function(other) {
  if(other === undefined) return this;
  return (this.x === other.x) &&
        (this.y === other.y) &&
        (this.z === other.z)
};

Position.prototype.equals2d = function(other) {
  if(other === undefined) return this;
  if ((this.x === other.x) && (this.y === other.y)) {
    return true;
  }
}
