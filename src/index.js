const fs = require('fs')
const path = require('path')

module.exports = function(options, files) {
    console.log(options, files)
    if(!fs.existsSync(path.resolve(options.output))) fs.mkdirSync(path.resolve(options.output))
    // if(!fs.existsSync(path.resolve(options.output, 'index.html'))) fs.writeFileSync(path.resolve(options.output, 'index.html'), '')
}
