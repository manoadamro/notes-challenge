var formatOutput = function (title, pass) {
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

  document.write(string);
};
