

(function(exports) {
  function testThatNoteIsCreated() {

    var text = "Hello Adam!";
    var list = new NoteList();
    list.addNote(text);

    monkeyTest('Note is created and added to NoteList')
      .assert(list.getNotes().length)
      .isEqualTo(1)
  };

  monkeyDefine("Note List Model")
  testThatNoteIsCreated();
})(this);
