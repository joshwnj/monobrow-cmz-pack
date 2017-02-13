const cmzTransform = require('cmz/transform')
const monobrow = require('monobrow')

module.exports = monobrow.pack({
  vendor: [
    'cmz'
  ],

  setup: function setup (b, opts) {
    b.transform(cmzTransform)
  }
})
