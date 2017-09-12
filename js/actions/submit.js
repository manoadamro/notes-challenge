
(function(exports){
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

  exports.listenForSubmit = listenForSubmit;
})(this);
