#!/usr/bin/env node
var fs = require('fs')
var dirName = process.argv[2]

const index = "<!DOCTYPE>\n<title>Hello</title>\n<h1>Hi</h1>"
const css = "h1{color: red;}"
const js = "var string = \"Hello World\"\nalert(string)"

if (fs.existsSync(dirName)) {
    console.log('Dir %s exist', dirName)
} else {
    fs.mkdirSync("./" + dirName)
    process.chdir("./" + dirName)
    fs.mkdirSync("css")
    fs.mkdirSync("js")
    fs.writeFileSync("./index.html", index)
    fs.writeFileSync("css/style.css", css)
    fs.writeFileSync("js/main.js", js)
    console.log('Success')
    process.exit(0)
}


