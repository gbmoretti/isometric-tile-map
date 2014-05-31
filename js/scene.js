function Scene(map_tiles) {
  this.tiles = map_tiles;
  this.iso = new Isomer(document.getElementById("art"));
  this.selected_tile = null;
  this.semi_selected = null;
}

Scene.prototype.add = function(tile) {
  this.tiles.push(tile);
};

Scene.prototype.draw = function() {
  this._blank();

  var selected_tile = this.tiles.get(this.selected_tile);
  selected_tile.color = new Isomer.Color(30,150,30);

  this.semi_selected.forEach(function(position) {
    var tile = this.tiles.get(position);
    if(tile) tile.color = new Isomer.Color(30,220,30);
  }, this);

  this.tiles.forEach(function(tile) {
    this.iso.add(tile.shape,tile.color);
  }, this);
};

Scene.prototype._blank = function() {
  this.iso.canvas.clear();
};

Scene.prototype.selectedTile = function(position) {
  this.selected_tile = position;
};

Scene.prototype.semiSelectedTiles = function(positions) {
  this.semi_selected = positions
}
