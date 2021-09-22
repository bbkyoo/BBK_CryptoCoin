const request_url = require('request');

let Tickerurl = 'http://3.34.123.12/userWallet';

async function getWallet(token ,callback){
        const options = {
                uri: Tickerurl,
                method: 'Post',
                body:{
                      tokens: token  
                },
                json:true
        }
        request_url.post(options, async function(error, response, body) {
                var err = error
                callback(body, err)
        })
}
                        
module.exports.getWallet = getWallet
