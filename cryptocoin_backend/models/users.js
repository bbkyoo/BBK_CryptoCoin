const Sequelize = require('sequelize')


module.exports = (sequelize,DataTypes)=>{
    return sequelize.define('users',{
        user_id: {
            type: DataTypes.INTEGER, 
            allowNull: false,
            unique: true,
            autoIncrement: true,
            primaryKey: true,
        },
        email:{
            type: DataTypes.STRING(40),
            allowNull: true,
            unique: true,
        },
        name:{
            type: DataTypes.STRING(15),
            allowNull: false,
        },
        password:{
            type: DataTypes.STRING(100),
            allowNull: true, // 카카오 로그인은 비번 필요없으니,,
        },
        cash:{
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue:0,
        },

    },{
        timestamps:true,
        paranoid : true, // 삭제일 (복구용)
    })
}