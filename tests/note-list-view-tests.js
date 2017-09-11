
(function(exports) {
  function testThatNoteViewWorks() {

    var text = "Note 1";
    var text2 = "Note 2";

    var list = new NoteList();
    list.addNote(text);
    list.addNote(text2);

    var view = new NoteListView (list)

    pass = view.getNotesView() === "<li>" + text + "</li><li>" + text2 + "</li>"
    formatOutput('testThatNoteViewWorks', pass)
  };

  testThatNoteViewWorks();
})(this);
