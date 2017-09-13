
(function(exports){
  function listenForSubmit(controller) {
    window.addEventListener("submit", function(submitEvent){
      submitEvent.preventDefault();
      submitNewNote(controller);
    });
  }

  function submitNewNote(controller) {
    var element = document.getElementById('new-note-text');
    var content = element.value;
    element.value = "";
    controller.noteList.addNote(content);
    controller.setView();
  }

  exports.listenForSubmit = listenForSubmit;
})(this);
