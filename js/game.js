function Game(tile_map) {
  this.fps = 30;

  this.map_tiles = new Map(tile_map);
  this.timeout_func = null;

  this.max_x = 9;
  this.max_y = 9;
  this.selected_x = 0;
  this.selected_y = 0;



}

Game.prototype._inBounds = function(x,y) {
  var a = (x >= 0 && x <= this.max_x &&
         y >= 0 && y <= this.max_y);
  return a;
};

Game.prototype._upPressed = function() {
  var new_y = this.selected_y +1;
  if(this._inBounds(this.selected_x,new_y)) {
    this.selected_y = new_y;
  }
};

Game.prototype._downPressed = function() {
  var new_y = this.selected_y -1;
  if(this._inBounds(this.selected_x,new_y)) {
    this.selected_y = new_y;
  }
};

Game.prototype._leftPressed = function() {
  var new_x = this.selected_x -1;
  if(this._inBounds(new_x,this.selected_y)) {
    this.selected_x = new_x;
  }
};

Game.prototype._rightPressed = function() {
  var new_x = this.selected_x +1;
  if(this._inBounds(new_x,this.selected_y)) {
    this.selected_x = new_x;
  }
};

Game.prototype.work = function() {
  this.scene = new Scene();
  selected_tile = new Position(this.selected_x,this.selected_y,1);
  this.scene.selectedTile(selected_tile);
}

Game.prototype.draw = function() {
  var _this = this;
  var tiles_array = this.map_tiles.generate();
  tiles_array.forEach(function(tile) {
    _this.scene.add(tile);
  });
  this.scene.draw();
}

Game.prototype.start = function() {
  this.work();
  this.draw();
  //this.work_func = window.setInterval(this.work.bind(this), 1);
  //this.draw_func = window.setInterval(this.draw.bind(this), 1000 / this.fps);
  var _this = this;
  window.onkeypress = function(event) {
    console.log('oi');
    switch(event.key) {
      case "Up":
        _this._upPressed();
        break;
      case "Down":
        _this._downPressed();
        break;
      case "Left":
        _this._leftPressed();
        break;
      case "Right":
        _this._rightPressed();
        break;
    }
    _this.work();
    _this.draw();
  }

}

Game.prototype.pause = function() {
  window.clearInterval(this.time_func);
}
