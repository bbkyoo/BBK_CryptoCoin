const request_url = require('request');

let Tickerurl = 'https://api.bithumb.com/public/ticker/ALL_KRW';


async function getCoins(callback){
        request_url(Tickerurl, async function(error, response, body) {
                coins = JSON.parse(body).data
                var err = error
                callback(coins, err)
        })
}

async function getCoin(tartgets, callback){
        request_url(Tickerurl, async function(error, response, body) {
                obj = JSON.parse(body)
                var err = error
                var coins =[]
                for(var i in tartgets) 
                {coins[i] = eval('obj.data.'+tartgets[i])}
                callback(coins, err)
        })
}
let Orderurl = 'https://api.bithumb.com/public/orderbook/ALL_KRW';
async function getCoinsOrder(callback){
        request_url(Orderurl, async function(error, response, body) {
                coins = JSON.parse(body).data
                var err = error
                callback(coins, err)
        })
}


function getCurrentPirce(prevClosing, fluctate)
{ return parseFloat(prevClosing) + parseFloat(fluctate);}

function isUprisePrice(fluctate)
{ 
        if(parseFloat(fluctate) > 0) 
        { return true; }
        else 
        { return false; }
}

module.exports.getCoinsOrder = getCoinsOrder
module.exports.getCoinsData = getCoins
module.exports.getSelectCoinData = getCoin