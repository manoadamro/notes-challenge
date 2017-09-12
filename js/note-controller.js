
// module for 'NoteController'
(function(exports){

  // constructor
  var NoteController = function (noteList) {
    this.noteList = noteList;
    this.noteList.addNote("Favourite drink: seltzer");
    this.view = new NoteListView(this.noteList);
  };

  // allows innerHTML of 'app' element to be changed
  NoteController.prototype.changeView = function (doc = document) {
    doc.getElementById('app').innerHTML = this.view.getNotesView();
  };

  // allows NoteController to be used globally
  exports.NoteController = NoteController;

})(this);
