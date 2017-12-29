'use strict'

class BookUpdate {
  get rules () {
    return {
      "title": 'string',
      "description": 'string',
      "author": 'string',
      "genre": 'string',
      "ISBN": 'string',
      // "price": 'number',
      "publication_date": 'date'
    }
  }
}

module.exports = BookUpdate
