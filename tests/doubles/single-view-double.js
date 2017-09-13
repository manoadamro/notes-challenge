
(function(exports) {

  var SingleViewDouble = function(noteModel){
    this.note = noteModel;
  }

  SingleViewDouble.prototype.createView = function(){
    return this.note.getText();
  }

  exports.SingleViewDouble = SingleViewDouble;
})(this);
