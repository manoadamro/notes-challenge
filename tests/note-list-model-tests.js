

(function(exports) {
  function testThatNoteIsCreated() {

    var text = "Hello Adam!";
    var list = new NoteList();
    list.addNote(text);

    if (list.getNotes().length !== 1) {
      throw new Error("testThatNoteIsCreated: New note was not added to array");
    } else {
      console.log("testThatNoteIsCreated:  Passes");
      document.write("testThatNoteIsCreated:  Passes<br>");
    }
  };

  testThatNoteIsCreated();
})(this);
