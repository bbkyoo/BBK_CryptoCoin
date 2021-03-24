const Sequelize = require('sequelize')

module.exports = ((sequelize,DataTypes)=>{
    return sequelize.define('users',{
        user_id: {
            type: Sequelize.INTEGER, 
            allowNull: false,
            unique: true,
            autoIncrement: true,
            primaryKey: true,
        },
        email:{
            type: Sequelize.STRING(40),
            allowNull: true,
            unique: true,
        },
        name:{
            type: Sequelize.STRING(15),
            allowNull: false,
        },
        password:{
            type: Sequelize.STRING(100),
            allowNull: true, // 카카오 로그인은 비번 필요없으니,,
        },
        cash:{
            type: Sequelize.INTEGER,
            allowNull: true,
            defaultValue:0,
        },

    },{
        timestamps:true,
        paranoid : true, // 삭제일 (복구용)
    })
})