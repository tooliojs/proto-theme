const fs = require('fs')
const path = require('path')
const os = require('os').platform()

let resolved = []
let marker; os === 'win32' ? marker = '\\' : marker = '/'

const rmrf = function(ipath) {
    if (fs.existsSync(ipath)) {
        fs.readdirSync(ipath).forEach((file, index) => {
            const curPath = path.join(ipath, file)
            if (fs.lstatSync(curPath).isDirectory()) rmrf(curPath) 
            else fs.unlinkSync(curPath)
        })
        fs.rmdirSync(ipath)
    }
}

function orderError(code) {
    switch(code) {
        case 0:
            console.log('error: must define "order" for pages to be built')
            process.exit()
        case 1:
            console.log('error: no match found for "order" entries')
            process.exit()
    }
}

function template(content) {
    let head = fs.readFileSync('public/template/head.html', { encoding:'utf8', flag:'r' })
    let body = fs.readFileSync('public/template/body.html', { encoding:'utf8', flag:'r' })
    return head + content + body
}

module.exports = function(options, files) {
    if(!options.order.length) orderError(0)
    if(!fs.existsSync(path.resolve(options.output))) fs.mkdirSync(path.resolve(options.output))
    options.order.forEach(entry => { files.forEach(file => { if(entry === file.split(marker)[file.split(marker).length - 1].split('.html')[0]) resolved.push(file) }) })
    if(!resolved.length) orderError(1)

    resolved.forEach(file => {
        let filename = file.split(marker)[file.split(marker).length - 1]
        let snippet = fs.readFileSync(file, { encoding:'utf8', flag:'r' })
        fs.writeFileSync(path.resolve(options.output, filename), template(snippet))
    })

    rmrf(path.resolve(options.tmp))

    return 0
}
