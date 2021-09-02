/*
  ======================================== COPY in node vs COPY in browser enviroment ====================================================
*/

// copy in clipboard

if (typeof window === 'undefined') {
  // node enviroment

  // Use pbcopy function in Mac OSx
  function pbcopy(data) {
    var proc = require('child_process').spawn('pbcopy');
    proc.stdin.write(data); proc.stdin.end();
  }
  pbcopy(output)
} else {
  // browser enviroment
  copy(output)
}