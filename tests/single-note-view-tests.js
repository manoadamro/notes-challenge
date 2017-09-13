(function(exports) {

  function testThatSingleNoteViewReturnsHTML() {
    var text = "abcdefghijklmnopqrstuvwxyz";
    var note = new Note(text);
    var singleNoteView = new SingleNoteView(note);

    monkeyTest('SingleNoteView returns correct HTML')
      .assert(singleNoteView.createView())
      .isEqualTo('<div>' + text + '</div>')
  };

  function testThatSingleNoteShowsLongStrings() {
    var text = "abcdefghijklmnopqrstuvwxyz\nabcdefghijklmnopqrstuvwxyz\nabcdefghijklmnopqrstuvwxyz";
    var note = new Note(text);
    var singleNoteView = new SingleNoteView(note);

    monkeyTest('SingleNoteView shows long strings')
      .assert(singleNoteView.createView())
      .isEqualTo('<div>' + text + '</div>')
  };

  monkeyDefine("Single Note View")
  testThatSingleNoteViewReturnsHTML();
  testThatSingleNoteShowsLongStrings();
})(this);
