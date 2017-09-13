
(function(exports) {

  var ListViewDouble = function(noteList){
    this.noteList = noteList
  }

  ListViewDouble.prototype.getNotesView = function(){
    return this.noteList.notes.length + " items";
  }

  exports.ListViewDouble = ListViewDouble;
})(this);
