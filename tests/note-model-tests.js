(function(exports) {

  var text = "Hello Adam!"
  var note = new Note(text);
  var note1 = new Note(text);
  var note2 = new Note(text);

  function testThatItReturnsTheNoteMessage() {

    pass = note.getText() === text
    formatOutput('Note returns message', pass)
  };

  function testThatFirstNoteIdIs0 () {
    pass = note.id === 0
    formatOutput('First note id is 0', pass)
  }

  function testThatNoteIdIncrements () {
    pass = note1.id === 1 && note2.id === 2
    formatOutput('Note id increments', pass)
  }

  testThatItReturnsTheNoteMessage();
  testThatFirstNoteIdIs0();
  testThatNoteIdIncrements();
})(this);
