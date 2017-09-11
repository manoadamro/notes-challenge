
(function(exports) {


  var NoteListView = function (noteList) {
    this.noteList = noteList
  };

  NoteListView.prototype.getNotesView = function () {
    string = ""
    for (var i = 0; i < this.noteList.notes.length; i++) {
      string += "<li>" + this.noteList.notes[i].getText() + "</li>"
    }
    return string;
  }

  // allows 'NoteList' to be used globally
  exports.NoteListView = NoteListView;

})(this);
