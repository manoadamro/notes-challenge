
(function(exports){
  var formatOutput = function (title, pass, notes) {
    var string = '<div class="output">' + title + '</div>: '
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
    return "<span class='monkey-expect'>- expected \"" + a + "\"<br />- to equal \"" + b + "\"</span>"
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

  var monkeyDefine = function(title) {
    document.write("<br /><span class='monkey-define'>" + title + "</span><br />");
  }

  exports.monkeyDefine = monkeyDefine;
  exports.monkeyTest = monkeyTest;

})(this);
