
(function(exports) {

  function createController(doc, newNotes) {
    var list = new NoteListDouble();
    for (var i = 0; i < newNotes.length; i++) {
      list.addNote(newNotes[i]);
    }
    return new NoteController(list, doc, ListViewDouble, SingleViewDouble);
  }

  function testThatEmptyNoteListIsDisplayedOnLoad() {

    var doc = new DocumentDouble();
    var controller = createController(doc, [])
    controller.setView()

    var pass = doc.tags['app'].innerHTML === '0 items'
    formatOutput('NoteController shows empty note list on load', pass)
  }

  function testNoteControllerShowsNoteList() {

    var doc = new DocumentDouble();
    var controller = createController(doc, ["Favourite drink: seltzer"]);
    controller.setView()

    var pass = doc.tags['app'].innerHTML === '1 items'
    formatOutput('NoteController shows note list', pass)
  };

  function testNoteControllerShowsSingleNote() {

    var doc = new DocumentDouble();
    var controller = createController(doc, [
      "Favourite drink: seltzer",
      "Favourite drink: bleach",
      "Favourite drink: chlorophyll"
    ]);
    controller.showNote(1)

    var pass = doc.tags['app'].innerHTML === "Favourite drink: bleach"
    formatOutput('NoteController shows single note', pass)
  }

  testThatEmptyNoteListIsDisplayedOnLoad();
  testNoteControllerShowsNoteList();
  testNoteControllerShowsSingleNote();
})(this);
