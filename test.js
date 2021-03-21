const crtpto = require('crypto')

console.log("pass = ", crtpto.createHash('sha512').update("123123").digest('base64'))
