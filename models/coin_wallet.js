const Sequelize = require('sequelize')

module.exports = ((sequelize,DataTypes)=>{
    let wallet = sequelize.define('coin_wallets',{
        name:{
            type: Sequelize.STRING(10),
            allowNull: false,
        },
        quantity:{
            type: Sequelize.FLOAT,
            allowNull: false,
            defaultValue:0,
        },
        averagePrice:{
            type: Sequelize.FLOAT,
            allowNull: false,
            defaultValue:0,
        },
        // 이름 : 수량 / 평단

    },{
        timestamps:true,
        paranoid : true, // 삭제일 (복구용)
    })
    return wallet;
})