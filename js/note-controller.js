
// module for 'NoteController'
(function(exports){

  // constructor
  var NoteController = function (noteList = new NoteList ()) {
    this.noteList = noteList;
    makeUrlChangeShowNote(this);
    listenForSubmit(this)
  };

  // allows innerHTML of 'app' element to be changed
  NoteController.prototype.setView = function (docObj=document) {
    window.location.hash = '#notes/home';
    var view = new NoteListView(this.noteList);
    docObj.getElementById('app').innerHTML = view.getNotesView();
  };

  // shows a single note
  NoteController.prototype.showNote = function (noteId, docObj=document) {
    var note = new SingleNoteView(this.noteList.notes[noteId]);
    docObj.getElementById('app').innerHTML = note.createView();
  };

  // event for resetting view to list view
  NoteController.prototype.resetView = function(clickEvent, controller) {
    clickEvent.preventDefault();
    controller.setView();
  };

  // makes NoteController global
  exports.NoteController = NoteController;

})(this);
