'use strict'

const Book =  use('App/Models/Book')
const Log = use('Logger')
const { validate } = use('Validator')
const BookStoreValidation =  use('App/Validators/BookStore')
const BookUpdateValidation =  use('App/Validators/BookUpdate')

class BookController {

  async store ({ request,response }) {
    Log.info('BookController store request',request.all())
    const BookRules = new BookStoreValidation();
    const validation = await validate(request.post(), BookRules.rules)
    if (validation.fails()) {
      return response.json({errors:validation.messages()})
    }
    const book = await Book.create(request.post());
    Log.info('BookController store response', book.toJSON())
    return response.json(book)
  }

  async get ({ request,response,params }) {
    Log.info('BookController get request', params)
    const book = await Book.findOrFail(params.id)
    Log.info('BookController get response', book.toJSON())
    return response.json(book)
  }

  async getAll ({ request,response }) {
    Log.info('BookController getAll request')
    const books = await Book.all()
    Log.info('BookController getAll response', books.toJSON())
    return response.json(books)
  }

  async delete ({ request,response,params }) {
    Log.info('BookController delete request', params)
    const book = await Book.findOrFail(params.id)
    const p = await book.delete()
    Log.info('BookController delete response', p)
    return response.json(p)
  }

  async update ({ request,response,params }) {
    Log.info('BookController update request', request.all(),params)
    const BookRules = new BookUpdateValidation();
    const validation = await validate(request.post(), BookRules.rules)
    if (validation.fails()) {
      return response.json({errors:validation.messages()})
    }
    const book = await Book.findOrFail(params.id)
    let new_book = request.post();
    delete new_book.id
    book.merge(new_book)
    book.save()
    Log.info('BookController update response', book.toJSON())
    return response.json(book)
  }

}

module.exports = BookController
