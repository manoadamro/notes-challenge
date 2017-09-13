

(function(exports) {
  function testThatNoteIsCreated() {

    var text = "Hello Adam!";
    var list = new NoteList();
    list.addNote(text);

    monkeyTest('Note is created and added to NoteList')
      .assert(list.getNotes().length)
      .isEqualTo(1)
  };

  function testThatNoteCanNotBeEmpty() {
    var list = new NoteList();
    list.addNote("");
    list.addNote(" ");
    list.addNote("    ");
    monkeyTest('Note can not be empty')
      .assert(list.getNotes().length)
      .isEqualTo(0)
  }

  monkeyDefine("Note List Model")
  testThatNoteIsCreated();
  testThatNoteCanNotBeEmpty();
})(this);
