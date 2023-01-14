const group = require('./group')
const repeat = require('./repeat')
const platform = require('./platform')
const id = require('./id')
const account = require('./account')
const filename = require('./filename')
const filenameSpace = require('./filename-space')
const name = require('./name')
const onlyJson = require('./only-json')

const tests = [group, repeat, id, platform, account, filename, filenameSpace, name, onlyJson]

module.exports = (vdb, files) => tests.flatMap(f => f(vdb, files))
