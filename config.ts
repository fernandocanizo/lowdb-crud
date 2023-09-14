import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

// put database file on the root of the project, since this project has defined
// `outputDir` on TypeScript configuration, that is one level above this file
const __dirname = dirname(dirname(fileURLToPath(import.meta.url)))
const dbFilename = join(__dirname, 'db.json')

export default {
  dbFilename,
}
