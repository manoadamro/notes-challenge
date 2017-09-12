(function(exports) {
  function testThatSingleNoteViewReturnsHTML() {
    var text = "Hello Adam!";
    var note = new Note(text);
    var singleNoteView = new SingleNoteView(note);

    pass = singleNoteView.createView() === '<div>' + text + '</div>'
    formatOutput('SingleNoteView returns HTML', pass)
  };

  testThatSingleNoteViewReturnsHTML();
})(this);
