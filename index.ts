import { db } from './db.js'
import { Book } from './types/Book.js'
import { Schema } from './types/Schema.js'

// Create and query items using plain JavaScript
db.data.bookList.push({
  title: "El agente de las estrellas",
  author: 'John Scalzi',
  pages: 259,
})
const firstBook: Book = db.data.bookList[0]
console.log(firstBook)

// If you don't want to type db.data everytime, you can use destructuring assignment
const { bookList }: Schema = db.data
const removedBook: Book | undefined = bookList.pop()

console.log('Removed book:', JSON.stringify(removedBook, null, 2))

// Finally write db.data content to file
await db.write()

