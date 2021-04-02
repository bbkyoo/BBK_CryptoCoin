<template>
    <div class="Trade_Form">
        <div class="Form_List">
            <div class="Form_Title">
                <p>보유 원화</p>
            </div>
            <div class="Form_Des">
                <p><input type="text" placeholder="0" v-model="total_coin"></p>
            </div>
        </div>
        <div class="Form_List">
            <div class="Form_Title">
                <p>매수 가격</p>
            </div>
            <div class="Form_Des">
                <p><input type="text" placeholder="0" v-model="bid_price"></p>
            </div>
        </div>
        <div class="Form_List">
            <div class="Form_Title">
                <p>매수 수량</p>
            </div>
            <div class="Form_Des">
                <p><input type="text" placeholder="0" v-model="bid_quantity"></p>
            </div>
        </div>
        <div class="Form_List">
            <div class="Form_Title">
                <p>매수 총액</p>
            </div>
            <div class="Form_Des">
                <p><input type="text" placeholder="0" v-model="total_bids"></p>
            </div>
        </div>

        <div class="Form_Submit">
            <button type="submit" @click="success_bids()">
                매수
            </button>  
        </div>
        
    </div>

</template>

<script>
import { eventBus } from "../../main"
import axios from "axios"

// :style = "{backgroundColor: type === 'ASK' ? '#f14f4f' : '#7878e3'}"

export default {
    created(){
        eventBus.$on('bids',(bid_price) =>{
            this.bid_price = bid_price
        })
    },
    data(){
        return{
            total_coin: 100000000,
            bid_price: 0,
            bid_quantity: 0,
            total_bids: 0
        }
    },
    methods: {
        success_bids(){
            let bids_information = {
                coinname: this.coinname,
                bid_price: this.bid_price,
                bid_quantity: this.bid_quantity,
                user_id: 9
            }
            axios
                .post("http://3.36.109.182/market/buyorder", bids_information)
                .then((res) => {
                    console.log(res)
                    this.clearForm() 
                })
                .catch((err) => {
                    console.log(err)
                })
        },
        clearForm(){
            (this.coinname = null),
            (this.bid_price = 0),
            (this.bid_quantity = 0)
        }
    },
    updated(){
        this.total_bids = this.bid_quantity * this.bid_price
    },
    props: [
        "coinname"
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
    color: #000;
    height: 2rem;
    font-size: 1rem;
    border: none;
    margin: 0;
    padding: 0;
    outline: none;
}

</style>













