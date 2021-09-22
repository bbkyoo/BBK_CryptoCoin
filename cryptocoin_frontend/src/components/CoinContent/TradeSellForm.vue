<template>
    <div class="Trade_Form">
        <div class="Form_List">
            <div class="Form_Title">
                <p>보유 원화</p>
            </div>
            <div class="Form_Des">
                <p><input type="text" placeholder="0" v-model="total_coins"></p>
            </div>
        </div>
        <div class="Form_List">
            <div class="Form_Title">
                <p>매도 가격</p>
            </div>
            <div class="Form_Des">
                <p><input type="text" placeholder="0" :value="ask_price"></p>
            </div>
        </div>
        <div class="Form_List">
            <div class="Form_Title">
                <p>매도 수량</p>
            </div>
            <div class="Form_Des">
                <p><input type="text" placeholder="0" v-model="ask_quantity"></p>
            </div>
        </div>
        <div class="Form_List">
            <div class="Form_Title">
                <p>매도 총액</p>
            </div>
            <div class="Form_Des">
                <p><input type="text" placeholder="0" v-model="total_asks"></p>
            </div>
        </div>

        <div class="Form_Submit">
            <button type="submit" @click="success_asks()" :style = "{backgroundColor: type === 'ASK' ? '#f14f4f' : '#7878e3'}">
                매도
            </button>  
        </div>
    </div>


</template>

<script>
import { eventBus } from "../../main"
import axios from "axios"
import { mapState } from 'vuex'

// :style = "{backgroundColor: type === 'ASK' ? '#f14f4f' : '#7878e3'}"

export default {
    created(){
        eventBus.$on('asks',(ask_price) =>{
            this.ask_price = ask_price
        })
    },
    data(){
        return{
            coin_name: '',
            total_coins: this.myCoins,
            ask_price: 0,
            ask_quantity: 0,
            total_asks: 0
        }
    },
    computed: {
        ...mapState(["tokens"])
    },
    methods: {
        success_asks(){
            let asks_information = {
                coinname: this.coin_name,
                ask_price: this.ask_price,
                ask_quantity: this.ask_quantity,
                user_id: this.tokens
            }
            axios
                .post("http://3.34.123.12/market/sellorder", asks_information)
                .then((res) => {
                    console.log(res)
                    this.total_coins = res.data.balance
                    this.clearForm() 
                })
                .catch((err) => {
                    console.log(err)
                })
        },
        clearForm(){
            (this.ask_price = 0),
            (this.ask_quantity = 0)
        }
    },
    updated(){
        this.total_asks = this.ask_price * this.ask_quantity
        this.coin_name = this.coinname
    },
    props: [
        "coinname",
        "myCoins"
    ]
}
</script>

<style>
.Trade_Form{
    padding: 0 3rem;
}
.Form_List{
    padding: 1rem 0;
}
.Form_List p {
    margin: 0;
}
.Form_List input {
    display: block;
    width: 100%;
    height: 2rem;
    border: none;
    border-bottom: 1px solid #d9d9d9;
    outline: none;
    font-size: 1.2rem;
}
.Form_List label {
    position: absolute;
    right: 0;
    bottom: 5px;
    font-size: 0.5rem;
    color: #333;
}
.Form_Des {
    position: relative;
}
.Form_Des p{
    font-size: 1.2rem;
}
.Form_Des p span{
    font-size: 0.5em;
    margin-left: 10px;
}
.Form_Submit{
    margin-top: 0.7rem;
}
.Form_Submit button{
    display: block;
    width: 100%;
    color: #fff;
    height: 2rem;
    font-size: 1rem;
    border: none;
    margin: 0;
    padding: 0;
    outline: none;
}

</style>













