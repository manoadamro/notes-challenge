
(function(exports) {
  function testThatNoteViewWorks() {

    var text = "Note 1";
    var text2 = "Note 2";

    var list = new NoteList();
    list.addNote(text);
    list.addNote(text2);

    if (list.getNotesView() !== "<li>" + text + "</li><li>" + text2 + "</li>") {
      throw new Error("testThatNoteViewWorks: View is not working");
    } else {
      console.log("testThatNoteViewWorks:  Passes");
      document.write("testThatNoteViewWorks:  Passes<br>");

    }
  };

  testThatNoteViewWorks();
})(this);
