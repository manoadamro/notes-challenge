
(function(exports){

  var Tag = function() {
    this.innerHTML = "";
  };

  var DocumentDouble = function() {
    this.tags = {};
  };

  DocumentDouble.prototype.getElementById = function (id) {
    if (!(id in this.tags)) {
      this.tags[id] = new Tag ();
    };
    return this.tags[id];
  };

  exports.DocumentDouble = DocumentDouble;

})(this);
