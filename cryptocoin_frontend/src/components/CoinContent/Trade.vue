<template>
  <div class="Trade_Box">
      <div class="Trade_Head">
          <div class="Trade_Method">
              <p @click="isBuy" >매수</p>
          </div>
          <div class="Trade_Method">
              <p @click="isSell">매도</p>
          </div>
      </div>
        <div v-if="Buy">
            <TradeBuyForm 
            :coinname="name"
            :myCoins="myCoins_cash"
            ></TradeBuyForm>
        </div>
        <div v-else>
            <TradeSellForm
            :coinname="name"
            :myCoins="myCoins_cash"
            ></TradeSellForm>
        </div>
    </div>
</template>

<script>
import TradeBuyForm from './TradeBuyForm' 
import TradeSellForm from './TradeSellForm'
import { eventBus } from "../../main"
import axios from "axios"
import { mapState } from 'vuex'

export default {
    created(){
        eventBus.$on('bitCoin', (coinname) => {
            this.name = coinname
        })
    },
    mounted(){
        this.wallets()
    },    
    components: {
        TradeBuyForm,
        TradeSellForm
    },
    data(){
        return{
            myCoins: null,
            myCoins_cash: 100000000,
            Buy: true,
            name: '.'
        }
    },
    computed: {
        ...mapState(["tokens"])
    }
    ,
    methods:{
        wallets(){
            let wallet = {
                tokens: this.tokens
            }
            axios
                .post("http://3.34.123.12/userWallet", wallet)
                .then((res) => {
                    this.myCoins = res
                    this.myCoins_cash = this.myCoins.data.cash 
                })
                .catch((err) => {
                    console.log(err)
                })
        },
        isBuy(){
            this.Buy = true
        },
        isSell(){                   
            this.Buy = false
        }
    },
}
</script>

<style>

.Trade_Head{
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
}
.Trade_Head .Trade_Method {
    margin: 0 20px;
}
.Trade_Head .Trade_Method p{
    margin: 0;
    cursor: pointer;
    color: #b9b9b9;
}
.Trade_Head .Trade_Method p.on{
    text-decoration: underline;
    color: #333;
}



</style>












