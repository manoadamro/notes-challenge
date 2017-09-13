
(function(exports){
  function createController(doc, newNotes) {
    var list = new NoteListDouble();
    for (var i = 0; i < newNotes.length; i++) {
      list.addNote(newNotes[i]);
    }
    return new NoteController(list, doc, ListViewDouble, SingleViewDouble);
  }

  exports.createController = createController;
})(this);
