
// module for 'NoteController'
(function(exports){

  // constructor
  var NoteController = function (noteList = new NoteList (), doc = document, listView = NoteListView, singleView = SingleNoteView) {
    this.noteList = noteList;
    this.listView = listView;
    this.singleView = singleView;
    this.doc = doc
    makeUrlChangeShowNote(this);
    listenForSubmit(this)
  };

  // allows innerHTML of 'app' element to be changed
  NoteController.prototype.setView = function () {
    window.location.hash = '#notes/home';
    var view = new this.listView(this.noteList);
    this.doc.getElementById('new-note-form').style.display = "block";
    var form = this.doc.getElementById('counter').style.display = "block";
    var form = this.doc.getElementById('note-id').style.display = "none";
    this.doc.getElementById('app').innerHTML = view.getNotesView();
    this.doc.getElementById('counter').innerHTML = this.noteList.notes.length + " stored notes"
  };

  // shows a single note
  NoteController.prototype.showNote = function (noteId) {
    var note = new this.singleView(this.noteList.notes[noteId]);
    var form = this.doc.getElementById('new-note-form').style.display = "none";
    var form = this.doc.getElementById('counter').style.display = "none";
    var form = this.doc.getElementById('note-id').style.display = "block";
    this.doc.getElementById('app').innerHTML = note.createView();
    this.doc.getElementById('note-id').innerHTML = "Showing note: #" + noteId;
  };

  // event for resetting view to list view
  NoteController.prototype.resetView = function(clickEvent, controller) {
    clickEvent.preventDefault();
    controller.setView();
  };

  // makes NoteController global
  exports.NoteController = NoteController;

})(this);
