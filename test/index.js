const docs = require('@toolio/docs')

docs.build('html', {
    theme: 'src/index.js',
    order: [
        'test',
        'other',
        'boom.test',
        'ham time',
        'intro'
    ]
})