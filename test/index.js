const docs = require('@toolio/docs')

docs.build('html', {
    theme: 'src/index.js',
    order: [
        'intros',
        'other',
        'boom.test'
    ]
})