var formatOutput = function (title, pass) {
  style = "color: blue; width: 300px; display: inline-block;"
  string = '<div style="' + style + '">' + title + '</div>: '
  if (pass) {
    color = 'green'
    output = 'PASS'
  }
  else {
    color = 'red'
    output = 'FAIL'
  }
  string += "<span style=\"color: " + color + ";\">" + output + "</span><br />"

  document.write(string);
};
