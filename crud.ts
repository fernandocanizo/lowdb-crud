import db from './db.js'
import { Book } from './types/Book.js'

const { bookList } = db.data

export const create = async (newBook: Book) : Promise<boolean> => {
  try {
    bookList.push(newBook)
    await db.write()
    return true
  } catch (error) {
    console.error(error)
    return false
  }
}

export const readAll = () : Book[] => {
  return bookList
}

export const findByTitle = (title: string) : Book | undefined => {
  return bookList.find((book: Book) => book.title === title)
}

export const findByAuthor = (author: string) : Book | undefined => {
  return bookList.find((book: Book) => book.author === author)
}

export const update = async (modifiedBook: Book, index: number) : Promise<boolean> => {
  // since there's no IDs, there's no possible way to ensure we find the
  // proper book, so the only way to make an update is to receive the index.
  // Very ugly solution :/
  try {
    bookList.splice(index, 1, modifiedBook)
    db.write()
    return true
  } catch (error) {
    console.error(error)
    return false
  }
}

// I had an `upsert` function planned, but there's no point in doing it for
// the reasons pointed out in the `update` function comments

export const deleteByAuthor = async (author: string) : Promise<boolean> => {
  try {
    const newBookList: Book[] = bookList.filter((book: Book) => book.author !== author)
    db.data.bookList = newBookList
    await db.write()
    return true
  } catch (error) {
    console.error(error)
    return false
  }
}

export const deleteByTitle = async (title: string) : Promise<boolean> => {
  try {
    const newBookList: Book[] = bookList.filter((book: Book) => book.title !== title)
    db.data.bookList = newBookList
    await db.write()
    return true
  } catch (error) {
    console.error(error)
    return false
  }
}
