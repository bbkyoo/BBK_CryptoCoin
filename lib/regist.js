const crypto = require('crypto')
const db = require('../lib/db')

let emailOverlapError = new Error('The email already exists.')
let nameOverlapError = new Error('The name already exists.')


module.exports = async function(registData, callback){
    var createUser
    var err
    
    if(await db.OverlapCheck('email', registData.email)) throw emailOverlapError
    if(await db.OverlapCheck('name', registData.name)) throw nameOverlapError
    registData.password = await crypto.createHash('sha512').update(registData.password).digest('base64')
    console.log('regist data = ', registData)
    try{ createUser = await db.CreateData(registData) }
    catch (error) { console.log('create erro111 = ', error) }
    console.log('create success ='. createUser)
    callback(err, createUser);
}