const docs = require('@toolio/docs')

docs.build('html', {
    theme: 'src/index.js',
    order: [
        'Overview',
        'Getting Started',
        'Installation',
        'Build',
        'Markdown',
        'Advanced'
    ]
})