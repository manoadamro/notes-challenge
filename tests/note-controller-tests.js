
(function(exports) {


  function testThatEmptyNoteListIsDisplayedOnLoad() {

    var doc = new DocumentDouble();
    var controller = createController(doc, [])
    controller.setView()

    monkeyTest("NoteController shows empty note list on load")
      .assert(doc.tags['app'].innerHTML)
      .isEqualTo('0 items');
  }

  function testNoteControllerShowsNoteList() {

    var doc = new DocumentDouble();
    var controller = createController(doc, ["Favourite drink: seltzer"]);
    controller.setView()

    monkeyTest("NoteController shows note list")
      .assert(doc.tags['app'].innerHTML)
      .isEqualTo('1 items');
  };

  function testNoteControllerShowsSingleNote() {

    var doc = new DocumentDouble();
    var controller = createController(doc, [
      "Favourite drink: seltzer",
      "Favourite drink: bleach",
      "Favourite drink: chlorophyll"
    ]);
    controller.showNote(1)

    monkeyTest('NoteController shows single note')
      .assert(doc.tags['app'].innerHTML)
      .isEqualTo("Favourite drink: bleach");
  }

  function testNoteControllerHidesFormWhenShowingSingleNote() {

    var doc = new DocumentDouble();
    var controller = createController(doc, ["Favourite drink: seltzer"]);
    controller.showNote(0)

    monkeyTest('NoteController hides form when showing single note')
      .assert(doc.tags['new-note-form'].style.display)
      .isEqualTo("none");
  }

  function testNoteControllerHidesShowsFormByDefault() {

    var doc = new DocumentDouble();
    var controller = createController(doc, ["Favourite drink: seltzer"]);
    controller.setView()

    monkeyTest('NoteController shows form by default')
      .assert(doc.tags['new-note-form'].style.display)
      .isNotEqualTo("none");
  }

  monkeyDefine("Note Controller")
  testThatEmptyNoteListIsDisplayedOnLoad();
  testNoteControllerShowsNoteList();
  testNoteControllerShowsSingleNote();
  testNoteControllerHidesShowsFormByDefault();
  testNoteControllerHidesFormWhenShowingSingleNote()
})(this);
