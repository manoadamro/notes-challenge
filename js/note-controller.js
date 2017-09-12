
// module for 'NoteController'
(function(exports){

  function makeUrlChangeShowNote (controller) {
    window.addEventListener("hashchange", function(clickEvent){
      clickEvent.preventDefault();
      showNoteForCurrentPage(controller)
    });
  };

  function showNoteForCurrentPage (controller) {
    var noteId = window.location.hash.split("/")[1];
    controller.showNote(noteId);
  };

  function listenForSubmit(controller) {
    window.addEventListener("submit", function(submitEvent){
      submitEvent.preventDefault();
      submitNewNote(controller);
    });
  }

  function submitNewNote(controller) {
    var content = document.getElementById('new-note-text').value;
    controller.noteList.addNote(content);
    controller.setView();
  }

  // constructor
  var NoteController = function (noteList = new NoteList ()) {
    this.noteList = noteList;
    makeUrlChangeShowNote(this);
    listenForSubmit(this)
    this.setView();
  };

  // allows innerHTML of 'app' element to be changed
  NoteController.prototype.setView = function (doc = document) {
    view = new NoteListView(this.noteList).getNotesView();
    doc.getElementById('app').innerHTML = view
  };

  // shows a single note
  NoteController.prototype.showNote = function (noteId, doc = document) {
    var note = new SingleNoteView(this.noteList.notes[noteId]);

    doc
    .getElementById("app")
    .innerHTML = note.createView();
  };

  // event for resetting view to list view
  NoteController.prototype.resetView = function(clickEvent) {
    clickEvent.preventDefault();
    controller.setView();
  };

  // makes NoteController global
  exports.NoteController = NoteController;
})(this);
