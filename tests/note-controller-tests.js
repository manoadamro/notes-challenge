
(function(exports) {
  function testNoteController() {

    var list = new NoteList();
    var controller = new NoteController(list);

    var doc = new DocumentDouble();
    controller.changeView(doc)

    if (doc.tags['app'].innerHTML !== "<li>Favourite drink: seltzer</li>") {
      formatOutput('testNoteControllerChangesInnerHTML', false)
    } else {
      formatOutput('testNoteControllerChangesInnerHTML', true)
    }
  };

  testNoteController();
})(this);
