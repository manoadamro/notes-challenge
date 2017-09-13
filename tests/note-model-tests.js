(function(exports) {

  var text = "Hello Adam!"
  var note = new Note(text);
  var note1 = new Note(text);
  var note2 = new Note(text);

  function testThatItReturnsTheNoteMessage() {
    monkeyTest('Note returns message')
      .assert(note.getText())
      .isEqualTo(text)
  };

  function testThatFirstNoteIdIs0 () {
    monkeyTest('First note id is 0')
      .assert(note.id)
      .isEqualTo(0)
  }

  function testThatNoteIdIncrements () {
    monkeyTest('Note id increments')
      .assert(note1.id)
      .isEqualTo(1)
  }

  testThatItReturnsTheNoteMessage();
  testThatFirstNoteIdIs0();
  testThatNoteIdIncrements();
})(this);
