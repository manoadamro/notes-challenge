
(function(exports){

  var ClickEventDouble = function() {
    this.preventDefaultValue = false;
  }

  ClickEventDouble.prototype.preventDefault = function(){
    this.preventDefaultValue = true;
  }

  exports.ClickEventDouble = ClickEventDouble

})(this);
