var {sequelize} = require('../models/index')
const { Users } = require('../models');
const { Wallet } = require('../models');
sequelize.sync();

async function findBy(_attributes, _searchFilter, _filterValue){
    const findData = await Users.findOne({
        attributes: _attributes,
        where: { [_searchFilter]: _filterValue }});
    if(findData == null) throw error;
    return findData
}

/**
 * if already exists attribute return true
 * @param {*} _checkAttribute 
 * @param {*} _checkValue 
 */
async function isOverlap(_checkAttribute, _checkValue){ 
    const findData = await Users.findOne({
        where: { [_checkAttribute]: _checkValue }});
    if(findData != null) return true;
    else return false;
}

async function updateBy(_attributes, _attributesValue, _searchFilter, _filterValue){
    await Users.update(
        {[_attributes]: _attributesValue},
        {where: { [_searchFilter]: _filterValue}}
    );
    console.log('update complete')
}

async function deleteBy(_searchFilter, _filterValue){
    try {await Users.destory({ where: { [_searchFilter]: _filterValue }}); }
    catch (error){ console.log('delete fail erro = ', error); }
}

async function createBy(_signData){
    try {await Users.create({
        email: _signData.email,
        name: _signData.name,
        password: _signData.password,
        cash: 100000000,
     }); 
     return await findBy(['id'], 'name', _signData.name)
    }
    catch (error){ console.log('create fail erro = ', error); }
}

async function createCoin(_signData){
    try {await Wallet.create({
        name: _signData.coinName,
        quantity: _signData.quantity,
        averagePrice: _signData.price,
        userUserId: _signData.user_id,
     }); 
    }
    catch (error){ console.log('create fail erro = ', error); }
}
module.exports.CreateCoin = createCoin

module.exports.OverlapCheck = isOverlap
module.exports.FindData = findBy
module.exports.UpdateData = updateBy
module.exports.DeleteData = deleteBy
module.exports.CreateData = createBy
