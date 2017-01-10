const cmzTransform = require('cmz/transform')
const monobrow = require('monobrow')

module.exports = monobrow.pack({
  // we can run `monobrow --build-vendor` to produce the output
  vendor: [
    'cmz'
  ],

  setup: function setup (b, opts) {
    b.transform(cmzTransform)
  }
})
