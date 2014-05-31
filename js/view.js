function View(center_point,map_tiles,radius) {
  this.center_point = center_point;
  this.map_tiles = map_tiles;
  this.radius = radius;


  var positions = []

  //search for +x
  var x = this.radius;
  var position = this.center_point.move(0,0,1);
  while(x > 0) {
    position = position.move(x,0,0);
    if(this.map_tiles.get(position) === false) {
      positions.push(position.move(0,0,-1));
    }
    x--;
  }

  //search for -x
  var x = this.radius;
  var position = this.center_point.move(0,0,1);
  while(x > 0) {
    position = position.move(-x,0,0);
    if(this.map_tiles.get(position) === false) {
      positions.push(position.move(0,0,-1));
    }
    x--;
  }

  //search for +y
  var y = this.radius;
  var position = this.center_point.move(0,0,1);
  while(y > 0) {
    position = position.move(0,y,0);
    if(this.map_tiles.get(position) === false) {
      positions.push(position.move(0,0,-1));
    }
    y--;
  }

  //search for -y
  var y = this.radius;
  var position = this.center_point.move(0,0,1);
  while(y > 0) {
    position = position.move(0,-y,0);
    if(this.map_tiles.get(position) === false) {
      positions.push(position.move(0,0,-1));
    }
    y--;
  }

  //search +x,+y
  var x = this.radius;
  var position = this.center_point.move(0,0,1);
  while(x > 0) {
    position = position.move(x,x,0);
    if(this.map_tiles.get(position) === false) {
      positions.push(position.move(0,0,-1));
    }
    x--;
  }

  //search -x,-y
  var x = this.radius;
  var position = this.center_point.move(0,0,1);
  while(x > 0) {
    position = position.move(-x,-x,0);
    if(this.map_tiles.get(position) === false) {
      positions.push(position.move(0,0,-1));
    }
    x--;
  }

  //search +x,-y
  var x = this.radius;
  var position = this.center_point.move(0,0,1);
  while(x > 0) {
    position = position.move(x,-x,0);
    if(this.map_tiles.get(position) === false) {
      positions.push(position.move(0,0,-1));
    }
    x--;
  }

  //search -x,+y
  var x = this.radius;
  var position = this.center_point.move(0,0,1);
  while(x > 0) {
    position = position.move(-x,x,0);
    if(this.map_tiles.get(position) === false) {
      positions.push(position.move(0,0,-1));
    }
    x--;
  }

  return positions;
};

