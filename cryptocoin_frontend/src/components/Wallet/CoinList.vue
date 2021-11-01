<template>
    <div class="Coin_List">
        <div class="List_Head">
            <div class="Coin_Name">
                <span>한글명</span>
            </div>
            <div class="Coin_Price">
                <span>현재가</span>
            </div>
            <div class="Coin_Change_Price">
                <span>전일대비</span>
            </div>
            <div class="Coin_Volume">
                <span>거래대금</span>
            </div>
        </div>
        <div class="Coins"> 
            <Coin         
            v-for="(name, index) in names" :key="index"           
            :coinname="name"                            
            :current_price="Number(allCoins_data[name].prev_closing_price) + Number(allCoins_data[name].fluctate_24H)"
            :big_fluctate="Number(allCoins_data[name].fluctate_rate_24H)"
            :small_fluctate="Number(allCoins_data[name].fluctate_24H)"
            :trade_money="allCoins_data[name].acc_trade_value_24H"
            :max_price="Number(allCoins_data[name].max_price)"
            :min_price="Number(allCoins_data[name].min_price)"
            :units_traded="Number(allCoins_data[name].units_traded)"
            :acc_trade_value="Number(allCoins_data[name].acc_trade_value)"
            :allCoins_order="allCoins_order"     
            >
            </Coin>
        </div>
    </div>
</template>

<script>

import Coin from './Coin.vue'
import {getCoinsData} from "../../modules/bitTest"

export default {
    components: {
        Coin
    },
    data(){
        return {
            names: [],
            allCoins_data: {},
            allCoins_order: {}
        }
    },
    methods: {  
        playAlert(){  // 이거 method에서 무조건 형식 playAlert(){} 이다 무조건!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! 
            getCoinsData((coins, err) => {
                    this.allCoins_data = coins.data,
                    this.allCoins_order = coins.order 
                    if (err){
                        console.log(err)
                    } 
            })             

            getCoinsData((coins, err) => {
                    if (err){
                        console.log(err)
                    }
            
                for (var coin_name in coins.data){
                    this.names.push(coin_name) 
                }   
            })                           
            setInterval(() => {  // setInterval은 setInterval(() => {} 형식을 무조건!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! 사용!
                getCoinsData((coins, err) => {
                    this.allCoins_data = coins.data,
                    this.allCoins_order = coins.order 
                    if (err){
                        console.log(err)
                    } 
            })
            }, 1000)
        }
    },    
    created() {     
        this.playAlert()
    }
}
</script>



<style>
.Coin_List{
    height: calc(100%-24px);
}
.Coins{
    height: calc(100%-50px);
    overflow: auto;
}
.Coin_List .List_Head{
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    padding: 0.8rem 0;
    text-align: center;
}
.Coin_List .List_Head span {
    font-size: 0.75rem;
    color: #a9a9a9;
}
.Coin_List .Coin_Name {
    width: 100px;
}
.Coin_List .Coin_Price {
    width: 100px;
}
.Coin_List .Coin_Change_Price {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -moz-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    text-align: right;
}
.Coin_List .Coin_Volume{
 -webkit-box-flex: 1;
  -webkit-flex: 1;
     -moz-box-flex: 1;
      -ms-flex: 1;
          flex: 1;
}

.Coins::-webkit-scrollbar {
    width: 5px;  
    height: 5px;  
}
.Coins::-webkit-scrollbar-track {
    background-color: transparent;
}
.Coins::-webkit-scrollbar-track-piece {
    background-color: transparent;
}
.Coins::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background-color: #d9d9d9;
}
.Coins::-webkit-scrollbar-button:start {
    background-color: transparent; 
}
.Coins::-webkit-scrollbar-button:end {
    background-color: transparent; 
}

</style>




















