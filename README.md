# Notes Challenge


## To Do

- Move setDisplay, setWidth and setInnerHtml from NoteController to their own module,
possibly PageBuilder or something.

  - create new module

  - add script tag in index.html and test.html

  - move methods fromCoteController to new module

  - remove doc from NoteController and add to new module

  - Update tests:

    - new test file
    - create double for new module
    - add parameter to NoteController for new module
      (default to actual, override with new double in NoteController tests)
    - write tests for methods
