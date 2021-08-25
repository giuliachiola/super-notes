/*
  ======================================== Snake to camel case (method 1) ====================================================
*/

function snakeToCamel(s){
    return s.replace(/(\-)/g, ' ');
}

function titleCase(s) {
  s = s.toLowerCase().split(' ');

  for (var i = 0; i < s.length; i++) {
    s[i] = s[i].charAt(0).toUpperCase() + s[i].slice(1);
  }
  return s.join(' ');
}

titleCase(snakeToCamel("ciao-sono-un-test"))
// titleCase(snakeToCamel("ciao-sono-un-test"))
// "Ciao Sono Un Test"

/*
  ======================================== Snake to camel case (method 2) ====================================================
*/
function toCamelCase(str) {
  str = str.replace(/[-_\s]+(.)?/g, (match, ch) => // eslint-disable-line no-param-reassign
    (ch ? ch.toUpperCase() : ''),
  );

  return str.substr(0, 1).toLowerCase() + str.substr(1);
};

// toCamelCase("ciao-sono-un-test")
// "ciaoSonoUnTest"
