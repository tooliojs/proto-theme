const docs = require('@toolio/docs')

docs.build('html', {
    theme: 'index.js'
})

module.exports = function(options, files) {
    console.log(options, files)
}
