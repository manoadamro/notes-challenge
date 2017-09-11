
(function(exports){

  var NoteController = function (noteList) {

    this.noteList = noteList;
    this.noteList.addNote("Favourite drink: seltzer");
    this.view = new NoteListView(this.noteList);
  };

  NoteController.prototype.changeView = function (doc = document) {
    doc.getElementById('app').innerHTML = this.view.getNotesView();
  };

  exports.NoteController = NoteController;

})(this);
