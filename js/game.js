function Game(tile_map) {
  this.fps = 30;

  this.map_tiles = null;
  this.timeout_func = null;

  this.max_x = 18;
  this.max_y = 15;
  this.selected_x = 0;
  this.selected_y = 0;
  this.input = new Input();
  this.tile_map = tile_map;
};

Game.prototype._inBounds = function(x,y) {
  var a = (x >= 0 && x <= this.max_x &&
         y >= 0 && y <= this.max_y);
  return a;
};

Game.prototype.work = function() {
  this.map_tiles = new Map(this.tile_map);
  this.map_tiles = this.map_tiles.generate();
  this.scene = new Scene(this.map_tiles);

  selected_tile = new Position(this.selected_x,this.selected_y,0);
  this.scene.selectedTile(selected_tile);

  var viewCalculator = new View(selected_tile,this.map_tiles,1);
  this.scene.semiSelectedTiles(viewCalculator);
};

Game.prototype.draw = function() {
  var _this = this;
  // this.map_tiles.forEach(function(tile) {
  //   _this.scene.add(tile);
  // })
  this.scene.draw();
};

Game.prototype.start = function() {
  this.work();
  this.draw();
  //this.work_func = window.setInterval(this.work.bind(this), 1);
  //this.draw_func = window.setInterval(this.draw.bind(this), 1000 / this.fps);
  var _this = this;
  window.onkeypress = function(event) {
    var direction = _this.input.keypressed(event);
    _this.setSelectedTile(direction);
    _this.work();
    _this.draw();
  }
};

Game.prototype.pause = function() {
  window.clearInterval(this.time_func);
};

Game.prototype.setSelectedTile = function(direction) {
  var new_x = this.selected_x + direction[0];
  var new_y = this.selected_y + direction[1];
  if(this._inBounds(new_x,new_y)) {
    this.selected_x = new_x;
    this.selected_y = new_y;
  }
};
