'use strict'

const Model = use('Model')

class Logger extends Model {
  static get table () {
    return 'logger'
  }
}

module.exports = Logger
