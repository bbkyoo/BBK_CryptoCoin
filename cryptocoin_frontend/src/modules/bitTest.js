const request_url = require('request');

let Tickerurl = 'http://3.36.109.182/coinData';

async function getCoins(callback){
        request_url(Tickerurl, async function(error, response, body) {
                var coins = JSON.parse(body)
                var err = error
                callback(coins, err)
        })
}
                        
async function getCoin(tartgets, callback){
        request_url(Tickerurl, async function(error, response, body) {
                var obj = JSON.parse(body)
                var err = error
                var coins = []
                for(var i in tartgets) 
                {coins[i] = eval(`obj.data.`+tartgets[i])}
                callback(coins, err)
                if (err === true){
                        console.log(obj)
                }
        })
}

async function getCoinsOrder(coinname ,callback){
        request_url(Tickerurl , async function(error, response, body) {
                var coins = body
                var err = error
                callback(coins, err)
        })
}


module.exports.getCoinsOrder = getCoinsOrder
module.exports.getCoinsData = getCoins
module.exports.getSelectCoinData = getCoin