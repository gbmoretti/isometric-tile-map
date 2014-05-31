function MapTiles() {
  this.tiles = [];
  this.coord_cache = {};
};

MapTiles.prototype.push = function(tile) {
  this.tiles.push(tile);
};

MapTiles.prototype.get = function(position) {
  var cache_key = position.x + ',' + position.y + ',' + position.z;
  // if(this.coord_cache[cache_key] === undefined) {
  //   this.coord_cache[cache_key] = this._searchTile(position);
  // }
  // return this.coord_cache[cache_key];
  return this._searchTile(position);
};

MapTiles.prototype.forEach = function(fn,ctx) {
  var context = ctx || this;
  this.tiles.forEach(fn,context);
};

MapTiles.prototype._searchTile = function(position) {
  var tile = false;
  this.tiles.every(function(e) {
    if(e.position.equals(position)) {
      tile = e;
      return false;
    }
    return true;
  });
  return tile;
};

MapTiles.prototype.tilesLength = function() {
  return this.tiles.length;
};
