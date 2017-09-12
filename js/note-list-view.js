
// module for 'NoteListView'
(function(exports) {

  // constructor
  var NoteListView = function (noteList) {
    this.noteList = noteList
  };

  // return html for all notes
  NoteListView.prototype.getNotesView = function () {
    string = ""
    for (var i = 0; i < this.noteList.notes.length; i++) {
      text = this.noteList.notes[i].getText()
      if(text.length > 20) text = text.substring(0,20);
      string += '<a href="#notes/' + i + '"><li>' + text + '</li></a>'
    }
    return string;
  }

  // allows 'NoteList' to be used globally
  exports.NoteListView = NoteListView;

})(this);
