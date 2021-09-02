const path = require('path')

module.exports = {
  // set your styleguidist configuration here
  // ...
  require: [
    /* mock vue router, see */
    path.join(__dirname, 'src/mocks/scripts/mock-router-styleguidist.js'),
  ],
}
