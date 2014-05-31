function Map(tile_map) {
  this.tiles = [];
  this.tile_color = {
    '#': new Isomer.Color(200,200,200),
    '@': new Isomer.Color(100,100,100),
    '*': new Isomer.Color(150,50,50)
  };

  this.x_spacement = 1.1;
  this.y_spacement = 2.1;
  this.tile_scale = 0.7;
  this.tile_map = tile_map;
}

Map.prototype.generate = function() {
  var coord_z = 0;
  this.tile_map.forEach(function(lines,z) {
    this._drawY(z,lines,coord_z);
    coord_z++;
  }, this);

  return this.tiles;
}

Map.prototype._drawX = function(z,y,line,coord_z,coord_y) {
  var i = line.length;
  var x = line.length + this.x_spacement;
  while (i--) {
    var tile_type = line.charAt(i);
    x = x - this.x_spacement;

    var cube = Isomer.Shape.Prism(Isomer.Point(x,y,z))
      .scale(Isomer.Point.ORIGIN,this.tile_scale,this.tile_scale,this.tile_scale);
    tile = this._newTile(cube,tile_type,new Position(i,coord_y,coord_z));
    if(tile !== null) {
      this.tiles.push(tile);
    }
  }
};

Map.prototype._drawY = function(z,lines,coord_z) {
  var lines = lines.split(' ');
  var j = lines.length;
  while(j--) {
    var line = lines[j];
    var y = j - this.y_spacement;
    this._drawX(z,y,line,coord_z,j);
  }
};

Map.prototype._newTile = function(cube,tile_type,position) {
  if(this.tile_color[tile_type] === undefined) {
    return null;
  }
  return new Tile(cube,this.tile_color[tile_type],position)
};
