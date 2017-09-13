(function(exports){

  var NoteDouble = function(text) {
    this.text = text;
  };

  NoteDouble.prototype.getText = function () {
    return this.text;
  };

  exports.NoteDouble = NoteDouble;

})(this);
