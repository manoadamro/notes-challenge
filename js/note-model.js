

// module for 'Note'
(function(exports) {

  var noteCount = 0;

  // constructor
  var Note = function (text) {
    this.text = text;
    this.id = noteCount;
    noteCount += 1
  };

  // returns text property
  Note.prototype.getText = function () {
    return this.text;
  };

  // allows 'Note' to be used globally
  exports.Note = Note;

})(this);
