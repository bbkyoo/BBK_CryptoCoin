const Sequelize = require('sequelize')

module.exports = ((sequelize,DataTypes)=>{
    return sequelize.define('users',{
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
        prvider :{ // 뭐로 로그인 했는지 : 카카오, 로컬,,
            type: Sequelize.STRING(10),
            allowNull: false,
            defaultValue: 'local',
        },
        snsId:{
            type: Sequelize.STRING(30),
            allowNull: true,
        },

    },{
        timestamps:true,
        paranoid : true, // 삭제일 (복구용)
    })
})