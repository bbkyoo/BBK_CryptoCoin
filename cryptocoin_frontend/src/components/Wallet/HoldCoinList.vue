<template>
    <div class="Hold_Coin_List">
        <div class="List_Head">
            <div class="Coin_Name">
                <span>코인명</span>
            </div>
            <div class="Coin_Price">
                <span>평가금/보유량</span>
            </div>
            <div class="Coin_Change_Price">
                <span>수익률</span>
            </div>
            <div class="Coin_Average">
                <span>매수가/평균가</span>
            </div>
        </div>
        <div class="Coins">
            <p v-if="isCoinsHear">
            <HoldCoin
            v-for="(myWallet, index) in myWallets" :key="index"
            :coinname="myWallet.name"
            :evaluation_fee="myWallet.evaluation_fee"
            :quantity="myWallet.quantity"
            :fluctate_rate="myWallet.fluctate_rate"
            :original_total="myWallet.original_total"
            :average_price="myWallet.average_price" 
            ></HoldCoin>
            </p>
            <p class="not-hold" v-else>보유중인 코인이 없습니다.</p>
        </div>
    </div>
</template>



<script>
import HoldCoin from './HoldCoin'
import { getWallet } from "../../modules/wallet"
import { mapState } from 'vuex'

export default {
components:{
    HoldCoin
},
data(){
    return{
        myWallets: null,
        isCoinsHear: false
    }
},
computed: {
    ...mapState(["tokens"])
},
methods: {
    playAlert(){
        getWallet(this.tokens, (wallet, err) => {
            this.myWallets = wallet.coins
            
            if(err){
                console.log(err)
            }

            if(this.myWallets.length === 0){
                this.isCoinsHear = false
            }    
            else{
                this.isCoinsHear = true
            }
        })
        setInterval(() => {  // setInterval은 setInterval(() => {} 형식을 무조건!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! 사용!
                getWallet(this.tokens , (wallet, err) => {
                    this.myWallets = wallet.coins
                    
                    if (err){
                        console.log(err)
                    }

                    if(this.myWallets.length === 0){
                        this.isCoinsHear = false
                    }    
                    else{
                    this.isCoinsHear = true
                    } 
            })
            }, 1000)
    }
},
created(){
    this.playAlert()
    
}
}
</script>

<style>

.Hold_Coin_List{
    height: 100%;
}
.Hold_Coin_List .List_Head{
    display: flex;
}
.Hold_Coin_List .List_Head{
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    padding: 0.8rem 0;
    text-align: center;
}
.Hold_Coin_List .List_Head span{
    font-size: 0.75rem;
    color: #a9a9a9;
}
.Hold_Coin_List .Coin_Name {
    width: 100px;
}
.Hold_Coin_List .Coin_Price {
    width: 100px;
}
.Hold_Coin_List .Coin_Price p span{
    display: block;
    font-size: 0.5rem;
    color: #a9a9a9 !important;
}
.Hold_Coin_List .Coin_Change_Price {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -moz-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    text-align: right;
}
.Hold_Coin_List .Coin_Change_Price p {
    text-align: right;
}
.Hold_Coin_List .Coin_Average{
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -moz-box-flex: 1;
    -ms-flex: 1;
    flex: 1;   
}
.Hold_Coin_List .Coin_Average p{
    text-align: right;
}
.Hold_Coin_List .Coin_Average p span{
    font-size: 0.5rem;
    display: block;
    color: #a9a9a9;
}

.not-hold{
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  color: #333;
  height: 200px;
}

</style>