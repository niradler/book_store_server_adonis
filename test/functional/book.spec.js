'use strict'

const { test,trait  } = use('Test/Suite')('Book')
const Book = use('App/Models/Book')

trait('Test/ApiClient')


test('create a book', async ({ client }) => {
  const book = await Book.create({
    "title":"Test",
    "description": "Best Book",
    "publication_date": "2001-01-01",
    "author": "Nir",
    "ISBN": "324324324",
    "genre": "Action",
    "price": "156.5"
  })

  const findBook = Book.find(book.id)

  const response = await client.get('/api/book/'+book.id).end()

  response.assertStatus(200)
  response.assertJSONSubset(findBook)
})

test('fetch unknown book', async ({ client }) => {

  const response = await client.get('/api/book/10000').end()

  response.assertStatus(404)
  response.assertJSONSubset({})
})

test('add new book', async ({ client }) => {

  const response = await client.post('/api/book').end()

  response.assertStatus(200)
  response.assertJSONSubset({
    "errors": [
        {
            "field": "title",
            "validation": "required",
            "message": "required validation failed on title"
        }
    ]
})
})
test('get list of books', async ({ client }) => {
  const book = await Book.create({
    "title":"Test",
    "description": "Best Book",
    "publication_date": "2001-01-01",
    "author": "Nir",
    "ISBN": "324324324",
    "genre": "Action",
    "price": "156.5"
  })
const books = Book.all();
  const response = await client.get('/api/books').end()

  response.assertStatus(200)
  response.assertJSONSubset(books)
})
