
(function(exports){

    function makeUrlChangeShowNote (controller) {
      window.addEventListener("hashchange", function(clickEvent){
        clickEvent.preventDefault();
        showNoteForCurrentPage(controller)
      });
    };

    function showNoteForCurrentPage (controller) {
      var noteId = window.location.hash.split("/")[1];
      if (!(isNaN(noteId))) { controller.showNote(noteId); }
    };

    exports.makeUrlChangeShowNote = makeUrlChangeShowNote;
})(this);
