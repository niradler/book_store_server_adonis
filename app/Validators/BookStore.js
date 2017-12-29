'use strict'

class BookStore {
  get rules () {
    return {
      "title": 'required|string',
      "description": 'required|string',
      "author": 'required|string',
      "genre": 'required|string',
      "ISBN": 'required|string',
      "price": 'required',
      "publication_date": 'required|date'
    }
  }
}

module.exports = BookStore
