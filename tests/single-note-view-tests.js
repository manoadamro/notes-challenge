(function(exports) {

  function testThatSingleNoteViewReturnsHTML() {
    var text = "abcdefghijklmnopqrstuvwxyz";
    var note = new Note(text);
    var singleNoteView = new SingleNoteView(note);

    monkeyTest('SingleNoteView returns correct HTML')
      .assert(singleNoteView.createView())
      .isEqualTo('<div>' + text + '</div>')
  };

  monkeyDefine("Single Note View")
  testThatSingleNoteViewReturnsHTML();
})(this);
