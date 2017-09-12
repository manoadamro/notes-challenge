
// module for 'NoteController'
(function(exports){

  // constructor
  var NoteController = function (noteList) {
    this.noteList = noteList;
    this.view = new NoteListView(this.noteList);
  };

  // allows innerHTML of 'app' element to be changed
  NoteController.prototype.changeView = function (doc = document) {
    doc.getElementById('app').innerHTML = this.view.getNotesView();
  };

  // shows a single note
  NoteController.prototype.showNote = function (noteId, doc = document) {
    var note = new SingleNoteView(this.noteList.notes[noteId]);

    doc
    .getElementById("app")
    .innerHTML = note.createView();
  };

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
    console.log(document.getElementById('new-note-text').value);
  }

  exports.NoteController = NoteController;
  exports.makeUrlChangeShowNote = makeUrlChangeShowNote;
  exports.listenForSubmit = listenForSubmit;

})(this);
