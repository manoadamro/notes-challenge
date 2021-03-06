
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

  function testNoteControllerShowsFormByDefault() {

    var doc = new DocumentDouble();
    var controller = createController(doc, ["Favourite drink: seltzer"]);
    controller.setView()

    monkeyTest('NoteController shows form by default')
      .assert(doc.tags['new-note-form'].style.display)
      .isNotEqualTo("none");
  }

  function testNoteControllerHidesCounterWhenShowingSingleNote() {

    var doc = new DocumentDouble();
    var controller = createController(doc, ["Favourite drink: seltzer"]);
    controller.showNote(0)

    monkeyTest('NoteController hides counter when showing single note')
      .assert(doc.tags['counter'].style.display)
      .isEqualTo("none");
  }

  function testNoteControllerShowsCounterByDefault() {

    var doc = new DocumentDouble();
    var controller = createController(doc, ["Favourite drink: seltzer"]);
    controller.setView()

    monkeyTest('NoteController shows counter by default')
      .assert(doc.tags['counter'].style.display)
      .isNotEqualTo("none");
  }

  function testNoteControllerShowsNoteIdWhenShowingSingleNote() {

    var doc = new DocumentDouble();
    var controller = createController(doc, ["Favourite drink: seltzer"]);
    controller.showNote(0)

    monkeyTest('NoteController shows note id when showing single note')
      .assert(doc.tags['note-id'].style.display)
      .isNotEqualTo("none");
  }

  function testNoteControllerHidesNoteIdByDefault() {

    var doc = new DocumentDouble();
    var controller = createController(doc, ["Favourite drink: seltzer"]);
    controller.setView()

    monkeyTest('NoteController hides note id by default')
      .assert(doc.tags['note-id'].style.display)
      .isEqualTo("none");
  }

  function testNoteControllerShowsHomeButtonWhenShowingSingleNote() {

    var doc = new DocumentDouble();
    var controller = createController(doc, ["Favourite drink: seltzer"]);
    controller.showNote(0)

    monkeyTest('NoteController shows home button when showing single note')
      .assert(doc.tags['home'].style.display)
      .isNotEqualTo("none");
  }

  function testNoteControllerHidesHomeButtonByDefault() {

    var doc = new DocumentDouble();
    var controller = createController(doc, ["Favourite drink: seltzer"]);
    controller.setView()

    monkeyTest('NoteController hides home button by default')
      .assert(doc.tags['home'].style.display)
      .isEqualTo("none");
  }

  monkeyDefine("Note Controller")
  testThatEmptyNoteListIsDisplayedOnLoad();
  testNoteControllerShowsNoteList();
  testNoteControllerShowsSingleNote();
  testNoteControllerShowsFormByDefault();
  testNoteControllerHidesFormWhenShowingSingleNote();
  testNoteControllerShowsCounterByDefault();
  testNoteControllerHidesCounterWhenShowingSingleNote();
  testNoteControllerShowsNoteIdWhenShowingSingleNote();
  testNoteControllerHidesNoteIdByDefault();
  testNoteControllerShowsHomeButtonWhenShowingSingleNote();
  testNoteControllerHidesHomeButtonByDefault();
})(this);
