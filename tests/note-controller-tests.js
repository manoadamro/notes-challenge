
(function(exports) {
  function testNoteController() {

    var list = new NoteList();
    var controller = new NoteController(list);

    var doc = new DocumentDouble();
    controller.changeView(doc)

    pass = doc.tags['app'].innerHTML === "<li>Favourite drink: seltzer</li>"
    formatOutput('NoteController changes inner HTML', pass)
  };

  testNoteController();
})(this);
