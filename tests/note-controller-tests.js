
var Tag = function() {
  this.innerHTML = "";
};

var DocumentDouble = function() {
  this.tags = {}
};

DocumentDouble.prototype.getElementById = function (id) {
  if (!(id in this.tags)) {
    this.tags[id] = new Tag ();
  }
  return this.tags[id];
};



(function(exports) {
  function testNoteController() {

    var list = new NoteList();
    var controller = new NoteController(list);

    var doc = new DocumentDouble();
    controller.changeView(doc)

    if (doc.tags['app'].innerHTML !== "<li>Favourite drink: seltzer</li>") {
      throw new Error("testNoteControllerChangesInnerHTML: something fucked up");
    } else {
      console.log("testNoteControllerChangesInnerHTML:  Passes");
      document.write("testNoteControllerChangesInnerHTML:  Passes<br>");
    }
  };

  testNoteController();
})(this);
