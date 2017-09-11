
(function(exports) {


  var NoteList = function () {
    this.notes = [];
  };

  NoteList.prototype.addNote = function (text) {
    var newNote = new Note(text)
    this.notes.push(newNote);
  };

  NoteList.prototype.getNotes = function () {
    return this.notes;
  }

  NoteList.prototype.getNotesView = function () {
   string = ""
   for (var i = 0; i < this.notes.length; i++) {
      string += "<li>" + this.notes[i].getText() + "</li>"
    }
    return string;
  }


  // allows 'NoteList' to be used globally
  exports.NoteList = NoteList;

})(this);
