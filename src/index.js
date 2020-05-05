const fs = require('fs')
const path = require('path')
const os = require('os').platform()
const mkcp = require('mkcp')
const clean = require('js-beautify')
const option = {
    html: {
        indent_size: 2
    }
}

let resolved = []
let marker; os === 'win32' ? marker = '\\' : marker = '/'
let nav_input
let nav_output
let nav_open = `<nav class="proto-header--body"><ul>`
let nav_close = `</ul></nav>`

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

function template(nav, content) {
    let prefix = path.join(__dirname, '..', 'public', 'template')
    let head = fs.readFileSync(path.join(prefix, 'head.html'), { encoding:'utf8', flag:'r' })
    let body = fs.readFileSync(path.join(prefix, 'body.html'), { encoding:'utf8', flag:'r' })
    let header = fs.readFileSync(path.join(prefix, 'header.html'), { encoding:'utf8', flag:'r' })
    return head + '\n' + header + nav + '</header><main class="proto-markdown">\n' + content + '</main>\n' + body
}

module.exports = function(options, files) {
    if(!options.order.length) orderError(0)
    if(!fs.existsSync(path.resolve(options.output))) fs.mkdirSync(path.resolve(options.output))
    options.order.forEach(entry => { files.forEach(file => { if(entry === file.split(marker)[file.split(marker).length - 1].split('.html')[0]) resolved.push(file) }) })
    if(!resolved.length) orderError(1)

    resolved.forEach(file => {
        let filename = file.split(marker)[file.split(marker).length - 1]
        if(!nav_input) nav_input = `<li><a href="${filename}">${filename.split('.html')[0]}</a></li>`
        else nav_input += `<li><a href="${filename}">${filename.split('.html')[0]}</a></li>`
    })

    nav_output = nav_open + nav_input + nav_close

    resolved.forEach(file => {
        let filename = file.split(marker)[file.split(marker).length - 1]
        let snippet = fs.readFileSync(file, { encoding:'utf8', flag:'r' })
        fs.writeFileSync(path.resolve(options.output, filename), clean.html(template(nav_output, snippet, option.html)))
    })

    rmrf(path.resolve(options.tmp))
    mkcp(path.join(__dirname, '..', 'public', 'css'), path.resolve(options.output, 'css'))
    mkcp(path.join(__dirname, '..', 'public', 'js'), path.resolve(options.output, 'js'))

    return 0
}
