'use strict'

const Model = use('Model')

class Book extends Model {
  static get table () {
    return 'books'
  }
  static formatDates (field, value) {
    if (field === 'publication_date') {
      return value.format('YYYY-MM-DD')
    }
    return super.formatDates(field, value)
  }
}

module.exports = Book
