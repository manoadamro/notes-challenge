
(function(exports) {
  function testNoteControllerShowsNoteList() {

    var list = new NoteList();
    list.addNote("Favourite drink: seltzer");
    var controller = new NoteController(list);

    var doc = new DocumentDouble();
    controller.setView(doc)

    var pass = doc.tags['app'].innerHTML === '<a href="#notes/0"><li>Favourite drink: sel</li></a>'
    formatOutput('NoteController shows note list', pass)
  };

  function testNoteControllerShowsSingleNote() {
    var list = new NoteList();
    list.addNote("Favourite drink: seltzer");
    list.addNote("Favourite drink: bleach");
    list.addNote("Favourite drink: chlorophyll");
    var controller = new NoteController(list);

    var doc = new DocumentDouble();
    controller.showNote(1, doc)

    var pass = doc.tags['app'].innerHTML === "<div>Favourite drink: bleach</div>"
    formatOutput('NoteController shows single note', pass)
  }

  // var doc = new DocumentDouble();
  // console.log(doc);
  // doc.getElementById('test').innerHTML = "hello";
  // console.log(doc.tags['test'].innerHTML);

  testNoteControllerShowsNoteList();
  testNoteControllerShowsSingleNote();
})(this);
