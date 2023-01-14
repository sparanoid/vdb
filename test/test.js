const { readdir } = require('fs').promises

const test = require('.')
require('..').withFilename()
  .then(async vdb => {
    const errors = test(vdb, await readdir('vtbs'))
    if (errors.length) {
      errors.forEach(e => console.error(e))
      process.exit(1)
    }
  }).catch(e => {
    console.error(e)
    process.exit(1)
  })
