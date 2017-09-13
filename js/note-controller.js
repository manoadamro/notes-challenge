
// module for 'NoteController'
(function(exports){

  function setDisplay(doc, id, value) {
    doc.getElementById(id).style.display = value;
  };

  function setWidth(doc, id, value) {
    doc.getElementById(id).style.width = value;
  };

  function setInnerHtml(doc, id, value) {
    doc.getElementById(id).innerHTML = value;
  }

  function numNotesString (length) {
    var string = length + " stored note"
    if (length !== 1) { string += "s" }
    return string
  }

  // constructor
  var NoteController = function (noteList = new NoteList (), doc = document, listView = NoteListView, singleView = SingleNoteView) {
    this.noteList = noteList;
    this.doc = doc
    this.listView = listView;
    this.singleView = singleView;
    makeUrlChangeShowNote(this);
    listenForSubmit(this)
  };

  // allows innerHTML of 'app' element to be changed
  NoteController.prototype.setView = function () {
    window.location.hash = '#notes/home';
    var view = new this.listView(this.noteList);

    setDisplay(this.doc, 'new-note-form', "block");
    setDisplay(this.doc, 'counter', "block");
    setDisplay(this.doc, 'note-id', "none");
    setDisplay(this.doc, 'home', "none");

    setWidth(this.doc, 'app', "200px");

    setInnerHtml(this.doc, 'app', view.getNotesView())
    setInnerHtml(this.doc, 'counter', numNotesString(this.noteList.notes.length))
  };

  // shows a single note
  NoteController.prototype.showNote = function (noteId) {
    var note = new this.singleView(this.noteList.notes[noteId]);

    setDisplay(this.doc, 'new-note-form', "none");
    setDisplay(this.doc, 'counter', "none");
    setDisplay(this.doc, 'note-id', "block");
    setDisplay(this.doc, 'home', "block");

    setWidth(this.doc, 'app', "500px");

    setInnerHtml(this.doc, 'app', note.createView())
    setInnerHtml(this.doc, 'note-id', "Showing note: #" + noteId)
  };

  // event for resetting view to list view
  NoteController.prototype.resetView = function(clickEvent, controller) {
    clickEvent.preventDefault();
    controller.setView();
  };

  // makes NoteController global
  exports.NoteController = NoteController;

})(this);
