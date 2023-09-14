import { Low } from 'lowdb'
import { JSONFile } from 'lowdb/node'

import config from './config.js'
import { Schema } from './types/Schema.js'

// Configure lowdb to write data to JSON file
const adapter = new JSONFile<Schema>(config.dbFilename)

const defaultData: Schema = {
  bookList: [],
}

export const db = new Low<Schema>(adapter, defaultData)

// Read data from JSON file, this will set `db.data` content
// If JSON file doesn't exist, defaultData is used instead
await db.read()
