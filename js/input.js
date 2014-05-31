function Input() {

};

Input.prototype.keypressed = function(event) {
  var _this = this;
  switch(event.key) {
      case "Up":
        return _this._upPressed();
        break;
      case "Down":
        return _this._downPressed();
        break;
      case "Left":
        return _this._leftPressed();
        break;
      case "Right":
        return _this._rightPressed();
        break;
    }
};

Input.prototype._upPressed = function() {
  return [0,1];
};

Input.prototype._downPressed = function() {
  return [0,-1];
};

Input.prototype._leftPressed = function() {
  return [-1,0];
};

Input.prototype._rightPressed = function() {
  return [1,0];
};
