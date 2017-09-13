(function(exports) {

  function testThatSingleNoteViewReturnsHTML() {
    var text = "abcdefghijklmnopqrstuvwxyz";
    var note = new Note(text);
    var singleNoteView = new SingleNoteView(note);

    var pass = singleNoteView.createView() === '<div>' + text + '</div>'
    formatOutput('SingleNoteView returns correct HTML', pass)
  };

  testThatSingleNoteViewReturnsHTML();
})(this);
