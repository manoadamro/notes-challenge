(function(exports) {
  function testThatItReturnsTheNoteMessage() {
    var text = "Hello Adam!"
    var note = new Note(text);

    pass = note.getText() === text
    formatOutput('testThatItReturnsTheNoteMessage', pass)
  };

  testThatItReturnsTheNoteMessage();
})(this);
