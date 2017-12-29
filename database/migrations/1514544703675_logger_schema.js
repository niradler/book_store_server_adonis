'use strict'

const Schema = use('Schema')

class LoggerSchema extends Schema {
  up () {
    this.create('logger', (table) => {
      table.increments()
      table.string('type');
      table.string('file');
      table.string('method');
      table.string('description');
      table.text('data');
      table.timestamps(false,true);
    })
  }

  down () {
    this.drop('loggers')
  }
}

module.exports = LoggerSchema
