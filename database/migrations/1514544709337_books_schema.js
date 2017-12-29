'use strict'

const Schema = use('Schema')

class BooksSchema extends Schema {
  up () {
    this.create('books', (table) => {
      table.increments()
      table.string('title');
      table.text('description');
      table.string('author');
      table.string('genre');
      table.string('ISBN');
      table.double('price');
      table.date('publication_date');
      table.timestamps();
    })
  }

  down () {
    this.drop('books')
  }
}

module.exports = BooksSchema
