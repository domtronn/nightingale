const R = require('ramda')

const cond = (...args) => R.cond(args)

const matches = R.curry(
  (source, obj) => Object
    .keys(source)
    .every(key => obj.hasOwnProperty(key) && obj[key] === source[key])
)

module.exports = { cond, matches }
