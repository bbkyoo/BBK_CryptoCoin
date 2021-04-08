const crypto = require('crypto')
const db = require('../lib/db')
let secretObj = require("../config/jwt");

const idError = new Error('can not find id')
const pwdError = new Error('passwords do not match')


async function findById(_id, _pwd){
    var user 
    /****************************************id check********************************************/
    try { user = await db.FindData(['id', 'password', 'name', 'email'], 'email', _id);}
    catch (error) { console.log("findIdErr = ", error); throw idError; }
    /**********************************password check********************************************/
    try { 
        if(user.dataValues.password != 
            crypto.createHash('sha512').update(_pwd).digest('base64')) throw error; 
    }
    catch (error) { console.log('test error',error); throw pwdError;}
    
    return user.dataValues
}


module.exports = async function(id, pwd, callback){
    //var loginUserId
    let token
    let userData
    let err
    try {
        //loginUserId = await findById(id, pwd)
        userData = await findById(id, pwd)
        token = jwt.sign(
            {id: userData.id,
            email: userData.email},
            secretObj.secret,
            {expiresIn: '60m'}
        )
    } catch (error) {
        err = error
    }
    callback(err, token);
}