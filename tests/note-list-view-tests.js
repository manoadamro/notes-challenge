
(function(exports) {
  function testThatNoteViewWorks() {

    var text = "Note 1";
    var text2 = "Note 2";

    var list = new NoteList();
    list.addNote(text);
    list.addNote(text2);

    var view = new NoteListView (list)

    monkeyTest('NoteListView returns correct HTML')
      .assert(view.getNotesView())
      .isEqualTo('<a href="#notes/0"><li>' + text + '</li></a><a href="#notes/1"><li>' + text2 + '</li></a>')
  };

  function testThatCharacterLimitIs20() {

    text = "abcdefghijklmnopqrstuvwxyz"
    var list = new NoteList();
    list.addNote(text);

    var view = new NoteListView (list);

    monkeyTest('NoteListView limits to 20 characters')
      .assert(view.getNotesView())
      .isEqualTo('<a href="#notes/0"><li>abcdefghijklmnopqrst</li></a>')
  }

  monkeyDefine("Note List View") 
  testThatNoteViewWorks();
  testThatCharacterLimitIs20();
})(this);
