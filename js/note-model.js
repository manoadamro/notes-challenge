

// module for 'Note'
(function(exports) {

  // constructor
  var Note = function (text) {
    this.text = text;
  };

  // returns text property
  Note.prototype.getText = function () {
    return this.text;
  };

  // allows 'Note' to be used globally
  exports.Note = Note;

})(this);
