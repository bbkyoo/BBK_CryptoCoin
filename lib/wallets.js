const db = require('../lib/db')

//현금, 보유 코인(이름 수량 평가총액 수익률 매수총액 평단)
// cash  quantity average_price name appraised_price buying_price
async function getWallet(_userId){
    var coinArray = await db.FindAllData('userUserId', _userId);
    var array = []
    var mondey = await db.FindData(['cash'], 'user_id', _userId);
    for (var coin in coinArray){
        userOwnerCoinData = {
            name: coin.name,
            quantity: coin.quantity,
            appraused_total: null,
            origin_total: (coin.averagePrice * coin.quantity),
            average_price: coin.averagePrice,
            fluctate: null,
        }
        array.push(userOwnerCoinData)
    }

    var wallet = {
        "cash" : mondey.cash.cash,
        "coins" : array,
    }
    console.log("test wallet = ", wallet)
    return wallet
}

module.exports.GetWallet = getWallet