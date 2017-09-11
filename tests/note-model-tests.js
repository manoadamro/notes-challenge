(function(exports) {
  function testThatItReturnsTheNoteMessage() {
    var text = "Hello Adam!"
    var note = new Note(text);

    if (note.getText() !== text) {
      throw new Error("Text does not match");
    } else {
      console.log("testThatItReturnsTheNoteMessage:  Passes");
      document.write("testThatItReturnsTheNoteMessage:  Passes<br>");
    }
  };

  testThatItReturnsTheNoteMessage();
})(this);
