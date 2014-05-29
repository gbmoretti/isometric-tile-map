function Game(tile_map) {
  this.fps = 30;

  this.map_tiles = new Map(tile_map);
  this.timeout_func = null;
}

Game.prototype.work = function() {
  this.scene = new Scene();

  selected_tile = {'x': 1, 'y': 1};
  scene.selectedTile(selected_tile);
}

Game.prototype.draw = function() {
  this.map_tiles.forEach(function(tile) {
    this.scene.add(tile);
  });
  this.scene.draw();
}

Game.prototype.start = function() {
  this.draw();
  //this.time_func = window.setInterval(this.draw.bind(this), 1000 / this.fps);
}

Game.prototype.pause = function() {
  window.clearInterval(this.time_func);
}
