function Scene() {
  this.tiles = [];
  this.iso = new Isomer(document.getElementById("art"));
  this.selected_tile = null;
}

Scene.prototype.add = function(tile) {
  this.tiles.push(tile);
};

Scene.prototype.draw = function() {
  this._blank();

  var x = 0;
  while(x < this.tiles.length) {
    var tile = this.tiles[x];
    this._drawSelected(tile);
    this.iso.add(tile.shape,tile.color);
    x++;
  }
};

Scene.prototype._blank = function() {
  this.iso.canvas.clear();
};

Scene.prototype.selectedTile = function(coords) {
  this.selected_tile = coords;
};

Scene.prototype._drawSelected = function(tile) {
  if(tile.position.equals2d(this.selected_tile)) {
    tile.color = new Isomer.Color(30,150,30);
  }
};
