const db = require('../lib/db')

//현금, 보유 코인(이름 수량 평가총액 수익률 매수총액 평단)
// cash  quantity average_price name appraised_price buying_price
async function getWallet(_userId){
    var coinArray = await db.FindAllData('userUserId', _userId);
    var mondey = await db.FindData('cash', 'user_id', _userId);

    var wallet = {
        "cash" : mondey,
        "coins" : coinArray,
    }
    return wallet
}

module.exports.GetWallet = getWallet