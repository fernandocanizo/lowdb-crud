import { Book } from './types/Book.js'

export const create = async (newBook: Book) : boolean => {
  return false
}

export const readAll = async () : Book[] => {
  return []
}

export const findByTitle = async (title: string) : Book | undefined => {
  return undefined
}

export const findByAuthor = async (author: string) : Book | undefined => {
  return undefined
}

export const update = async (modifiedBook: Book) : boolean => {
  return false
}

export const upsert = async (book: Book) : boolean => {
  return false
}

export const deleteByAuthor = async (author: string) : boolean => {
  return false
}

export const deleteByTitle = async (title: string) : boolean => {
  return false
}
