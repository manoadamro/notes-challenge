
(function(exports){
  var formatOutput = function (title, pass, notes) {
    string = '<div class="output">' + title + '</div>: '
    if (pass) {
      color = 'green';
      output = 'PASS';
    }
    else {
      color = 'red';
      output = 'FAIL';
    }
    string += '<span class="output" style="color: ' + color + ';">' + output + '</span><br />';

    if (!pass) {
      string += notes + "<br />"
    }

    document.write(string);
  };

  var expectationNote = function(a, b) {
    return "<span style='color: red'>- expected \"" + a + "\"<br />- to equal \"" + b + "\"</span>"
  };

  var monkeyTest = function(title) {

    var assert = function (objA) {

      var equal = function (objB) {
        var pass = objA === objB;
        formatOutput(title, pass, expectationNote(objA, objB))
      }

      var notEqual = function (objB) {
        var pass = objA !== objB;
        formatOutput(title, pass, expectationNote(objA, objB))
      }

      return {
        isEqualTo: equal,
        isNotEqualTo: notEqual
      }
    }

    return {
      assert: assert
    }
  }

  exports.monkeyTest = monkeyTest;

})(this);
