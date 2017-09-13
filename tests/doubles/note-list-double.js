
(function(exports){

  var NoteListDouble = function() {
    this.notes = [];
  };

  NoteListDouble.prototype.addNote = function(noteText) {
    this.notes.push(new NoteDouble(noteText));
  };

  NoteListDouble.prototype.getNotes = function () {
    return this.notes;
  };

  exports.NoteListDouble = NoteListDouble;

})(this);
