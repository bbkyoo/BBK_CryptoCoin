var {sequelize} = require('../models/index')
const { Users } = require('../models');
const { Wallet } = require('../models');
sequelize.sync();

//사고 팔기

async function buyCoin(order){
    //주문자아이디, 주문 코인, 주문 코인 가격, 주문 코인 수량
    //1.총액 계산
    const total = order.price * order.quantity;
    //2.주문자를 찾아 총액만큼 있는지 확인 후 없으면 에러 있으면 차감 후 진행
    const orders = await Users.findOne(
        {
            where: { user_id: order.id}
        }
    )
    if(orders.cash < total)
        throw error; //에러교체
    //3.주문자가 보유한 지갑 중에 주문 코인과 같은 이름이 있는지 확인
    try{
        const wallet = await Wallet.findOne(
            {
                where: {
                    userUserId: order.id,
                    name: order.type,
                }
            }
        )
        const newAveragePrice = getAveragePrice(
            wallet.averagePrice,
            wallet.quantity,
            order.price,
            order.quantity
        );
        wallet.quantity += order.quantity;
        await Wallet.update(
            {
                averagePrice: newAveragePrice,
                quantity: wallet.quantity
            },
            {where: { userUserId: order.id}}
        )
        //지갑이 있다 추가

    }catch{
        //지갑이 없다 생성
        await Wallet.create({
            name: order.type,
            quantity: order.quantity,
            averagePrice: total / order.quantity,
            userUserId: order.id
        })
    }
    orders.cash -= total
    await Users.update(
        {cash: orders.cash },
        {where: { user_id: order.id}}
    )
    console.log('buy complete')
    //4.1 지갑이 존재시 해당 지갑의 가격과 수량을 가져다가 새로운 평단을 구한후 삽입
    //4.2 지갑이 없을시 새로운 지갑을 생성 후 평단을 구한후 삽입
    //완료~
}

function getAveragePrice(existingPrice, existingQuantity, newPrice, newQuantity){
    return ((existingPrice * existingQuantity) + (newPrice * newQuantity)) 
            / (existingQuantity + newQuantity)
}


module.exports.BuyCoin = buyCoin
//module.exports.SellCoin = createBy