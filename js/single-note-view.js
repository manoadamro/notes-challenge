
// module for 'SingleNoteView'
(function(exports) {

  // constructor
  var SingleNoteView = function (noteModel) {
    this.note = noteModel;
  };

  // returns html for a single note
  SingleNoteView.prototype.createView = function () {
    return '<div>' + this.note.getText() + '</div>'
  };

  // allows 'SingleNoteView' to be used globally
  exports.SingleNoteView = SingleNoteView;

})(this);
