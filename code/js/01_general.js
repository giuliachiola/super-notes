/*
  ==============================================================================================
  APPUNTI JAVASCRIPT
  ==============================================================================================
*/

/*
  ======================================== 01 ====================================================
*/

// parte 1
var myfunction = function () {
  console.log('ciao');
}

window.myfunction === myfunction;

myfunction();

// parte 2
(function myfunction() {
  window.myfunctioninside = 'eccomi';
  console.log('ciao');
})()

window.myfunction === undefined;
window.myfunctioninside === myfunctioninside === 'eccomi';

// IIFE Immediately Invoked Function Execution

/*
  ======================================== 02 ====================================================
*/

// -- old method (no .map)
var colors = [
  { r: 255, g: 255, b: 255 }, // White
  { r: 128, g: 128, b: 128 }, // Gray
  { r: 0, g: 0, b: 0 }  // Black
];

var newColors = [];

for (var i = 0; i < colors.length; i++) {
  transformed = {
    r: Math.round(colors[i].r / 2),
    g: Math.round(colors[i].g / 2),
    b: Math.round(colors[i].b / 2)
  };

  newColors.push(transformed);
}

// Outputs:
// [
//    {r: 128, g: 128, b: 128 },
//    {r: 64,  g: 64,  b: 64  },
//    {r: 0,   g: 0,   b: 0   }
// ];
console.log(newColors);

// -- using .map
var newColors = colors.map(function (val) {
  return {
    r: Math.round(val.r / 2),
    g: Math.round(val.g / 2),
    b: Math.round(val.b / 2)
  };
});

/*
  ======================================== 03 ====================================================
*/

// FIREBASE GOOGLE

// per scrivere sopra al FIREBASE GOOGLE
/*
var blogsArray = [ ]  --> array temporaneo
for (let key in data){ --> key sono i pezzi alfanumerici che si vedono dalla console,
                            ogni pezzo corrisponde ad un oggetto univoco
   data[key].id = key --> assegno la key univoca (la vedo in console) all'id dell'oggetto
   blogsArray.push(data[key])  --> lo butto dentro all'array
}
this.blog= blogArray --> adesso assegno il nuovo array che ho creato

(adesso è blog.content e non più blog.body)
*/

/*
  ======================================== 03 ====================================================
*/
