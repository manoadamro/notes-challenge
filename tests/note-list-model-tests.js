

(function(exports) {
  function testThatNoteIsCreated() {

    var text = "Hello Adam!";
    var list = new NoteList();
    list.addNote(text);

    pass = list.getNotes().length === 1
    formatOutput('testThatNoteIsCreated', pass)
  };

  testThatNoteIsCreated();
})(this);
