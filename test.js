var express = require('express')
var app = express()
var server = require('http').Server(app)
server.listen(80, () => {
    console.log('connected')
})

app.get('/', (req, res) => {
    res.send("hello world")
})
