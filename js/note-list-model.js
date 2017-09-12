

// module for 'NoteListModel'
(function(exports) {

  // constructor, takes class type of note
  var NoteList = function () {
    this.notes = [];
  };

  // creates a new note and adds it to array
  NoteList.prototype.addNote = function (text) {
    var newNote = new Note(text)
    this.notes.push(newNote);
  };

  // returns the note array
  NoteList.prototype.getNotes = function () {
    return this.notes;
  }

  // allows 'NoteList' to be used globally
  exports.NoteList = NoteList;

})(this);
