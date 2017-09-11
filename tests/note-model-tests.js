(function(exports) {
  function testThatItReturnsTheNoteMessage() {
    var text = "Hello Adam!"
    var note = new Note(text);

    if (note.getText() !== text) {
      formatOutput('testNoteControllerChangesInnerHTML', false)
    } else {
      formatOutput('testNoteControllerChangesInnerHTML', true)
    }
  };

  testThatItReturnsTheNoteMessage();
})(this);
