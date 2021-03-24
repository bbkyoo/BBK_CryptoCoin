<template>
    <div class="Orderbook_Wrap">
        <div class="Orderbook_Head">
            <div class="Orderbook_Div">
                <p>매수량</p>
            </div>
            <div class="Orderbook_Div">
                <p>가격</p>
            </div>
            <div class="Orderbook_Div">
                <p>매도량</p>
            </div>
        </div>
        <div class="Orderbook">
            <OrderBookList
            v-for="bid in bids" :key="bid"
            :bid_price="Number(bid.price)"
            :bid_quantity="bid.quantity" 
            ></OrderBookList>

            <OrderBookList
            v-for="ask in asks" :key="ask"
            :ask_price="Number(ask.price)"
            :ask_quantity="ask.quantity"
            ></OrderBookList>    
        </div>
    </div>
</template>

<script>
import OrderBookList from '@/components/CoinContent/OrderBookList'
import { eventBus } from "../../main"

export default {
    components: {
        OrderBookList
    },
    data(){
        return {
            bids: {},
            asks: {}
        }
    },
    methods:{                             
    },
    created(){     
        eventBus.$on('bitCoin', (coinname, max_price, min_price, units_traded, acc_trade_value, current_price, big_fluctate, small_fluctate,coins_ord_bids,coins_ord_asks) => {
            this.bids = coins_ord_bids,
            this.asks = coins_ord_asks
        }) 
    }
}
</script>

<style>
.Orderbook {
    flex: 1;
    height: 400px;
    overflow: auto;
}

/* .Order_Form {
    flex: 1;
} */
.Orderbook_List{
    display: flex;
    padding: 1rem 0;
    border-bottom: 1px solid #d9d9d9;
    cursor: pointer;
}
.Orderbook_List > div{
    width: 33.33%; 
}
.Orderbook_List p{
    margin: 0;
    font-size: 1rem;
    text-align: right;
    padding-right: 20px;
    font-weight: 500; 
}
.Orderbook_List p span{
    font-size: 0.5em;
    margin-left: 5px;
    font-weight: 500; 
}


.Orderbook::-webkit-scrollbar {
    width: 5px;
    height: 5px;
}
.Orderbook::-webkit-scrollbar-track {
    background-color: transparent;
}
.Orderbook::-webkit-scrollbar-track-piece {
    background-color: transparent;
}
.Orderbook::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background-color: #d9d9d9;
}
.Orderbook::-webkit-scrollbar-button:start {
    background-color: transparent;
}
.Orderbook::-webkit-scrollbar-button:end {
    background-color: transparent;
}



.Orderbook_Head {
    display: flex;
    padding: 0 0 1em;    
}
.Orderbook_Head .Orderbook_Div {
    flex: 1;
}
.Orderbook_Head .Orderbook_Div p{
    margin: 0;
    text-align: center;
    font-size: 0.8rem;
}

</style>














