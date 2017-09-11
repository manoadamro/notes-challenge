

(function(exports) {
  function testThatNoteIsCreated() {

    var text = "Hello Adam!";
    var list = new NoteList();
    list.addNote(text);

    if (list.getNotes().length !== 1) {
      formatOutput('testThatNoteIsCreated', false)
    } else {
      formatOutput('testThatNoteIsCreated', true)
    }
  };

  testThatNoteIsCreated();
})(this);
