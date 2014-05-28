function Scene() {
  this.tiles = [];
  this.iso = new Isomer(document.getElementById("art"));
}

Scene.prototype.add = function(tile) {
  this.tiles.push(tile);
};

Scene.prototype.draw = function() {
  this._blank();

  var x = 0;
  while(x < this.tiles.length) {
    var tile = this.tiles[x];
    this.iso.add(tile.shape,tile.color);
    x++;
  }
};

Scene.prototype._blank = function() {

};
