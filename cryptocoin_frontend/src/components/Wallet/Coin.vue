<template>
    <div class="Coin" @click="emitCoins()">
        <div class="Coin_Name">
            <p>{{ coinname }}</p>
        </div>
        <div class="Coin_Price">
            <p>{{current_price.toLocaleString()}}</p>
        </div>
        <div class="Coin_Change_Price">
            <p>{{big_fluctate}}%</p>
            <span>{{small_fluctate}}</span>
        </div>
        <div class="Coin_Volume">
            <p>{{ parseInt((trade_money * 0.000001).toFixed(0),).toLocaleString() 
                }}
            백만
            </p>
        </div>
    </div>
</template>

<script>
import { eventBus } from "../../main"

export default {
    data(){
        return{
            coins_ord_bids: this.allCoins_order[this.coinname].bids,
            coins_ord_asks: this.allCoins_order[this.coinname].asks
        }
    },
    methods:{
        emitCoins(){
            eventBus.$emit('bitCoin', 
            this.coinname,
            this.max_price,
            this.min_price,
            this.units_traded,
            this.acc_trade_value,
            this.current_price,
            this.big_fluctate,
            this.small_fluctate,
            this.coins_ord_bids,
            this.coins_ord_asks       
            )
        }
    },
    props: ["coinname", 
    "current_price", 
    "big_fluctate", 
    "small_fluctate", 
    "trade_money",
    "max_price",
    "min_price",
    "units_traded",
    "acc_trade_value",
    "allCoins_order"
    ],
}

</script>

<style>
.Coin {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
       -moz-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    padding: 0.8rem 1rem;
    border-top: 1px solid #d9d9d9;
    cursor: pointer;
}
.Coin:hover {
    background: rgba(167, 182, 255, 0.2)
}
.Coin p {
    margin: 0;
    font-size: 0.9rem;
    color: #333;
    white-space: nowrap;
}
.Coin .Coin_Price {
    text-align: right;
    padding-right: 10px;
    -webkit-box-sizing: border-box;
       -moz-box-sizing: border-box;
            box-sizing: border-box;
    font-weight: 500;
}
.Coin .Coin_Name span {
    display: block;
    font-size: 0.65rem;
    color: #aaa;
}
.Coin .Coin_Change_Price {
    text-align: right;
}
.Coin .Coin_Change_Price span {
    display: block;
    font-size: 0.65em;
    text-align: right;
    color: inherit;
}
.Coin .Coin_Volume {
    text-align: right;
} 
.Coin .Coin_Volume p {
    font-size: 0.7em;
}

</style>

























