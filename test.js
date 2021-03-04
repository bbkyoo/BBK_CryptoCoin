var express = require('express')
var app = express()
var server = require('http').Server(app)
server.listen(8080, () => {
    console.log('connected')
})

app.get('/', (req, res) => {
    res.send('test connect')
})
