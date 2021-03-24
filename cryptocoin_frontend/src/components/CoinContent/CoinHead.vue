<template>
    <div class="Coin_Head">
        <div class="Selected">
            <div class="Name">
                <h3>{{ coinname }}</h3>    
            </div>
            <div class="Info">
                <div class="Price">
                    <h4>
                        {{ current_price.toLocaleString() }}
                        <span>KRW</span> 
                    </h4>
                    <div class="Change">
                        <p>
                            전일대비:
                            <span>
                                {{ big_fluctate }} % 
                            </span>
                            <span>
                                {{ small_fluctate }} KRW
                            </span>
                        </p>
                    </div>
                </div>

                <div class="Others">
                    <div class="High_Low">
                        <p>
                            고가
                            <span>
                                {{ max_price.toLocaleString() }}
                                <em>KRW</em> 
                            </span>
                        </p>
                        <p>
                            저가
                            <span>
                                {{ min_price.toLocaleString() }}
                                <em>KRW</em> 
                            </span>
                        </p>
                    </div>
                    <div class="Volume">
                        <p>
                            거래량(24H)
                            <span>
                                {{units_traded.toLocaleString()}}
                                <em>{{ coinname }}</em>
                            </span>
                        </p>
                        <p>
                            거대금(24H)
                            <span>
                                {{ acc_trade_value.toLocaleString() }}
                                <em>KRW</em>
                            </span>
                        </p>
                    </div> 
                </div>    
            </div>
        </div>
    </div>
</template>

<script>
import { eventBus } from '../../main'

export default {
    created(){
        eventBus.$on('bitCoin', (coinname, max_price, min_price, units_traded, acc_trade_value, current_price, big_fluctate, small_fluctate) => {
            this.coinname = coinname,
            this.max_price = max_price,
            this.min_price = min_price,
            this.units_traded = units_traded,
            this.acc_trade_value = acc_trade_value,
            this.current_price = current_price,
            this.big_fluctate = big_fluctate,
            this.small_fluctate = small_fluctate
        })
    },
    data() {
        return{
            coinname: "BTC",
            max_price: 0,
            min_price: 0,
            units_traded: 0,
            acc_trade_value: 0,
            current_price: 0,
            big_fluctate: 0,
            small_fluctate: 0  
        }
    },
    methods: {
    }
}
</script>

<style>
.Selected .Name{
    padding-bottom: 1rem;
    border-bottom: 1px solid #d9d9d9;
}

.Selected .Name .h3{
    margin: 0;
    font-size: 2rem;
    padding-left: 2.5rem;
    background-size: 1.8rem;
    background-repeat: no-repeat;
    background-position: left center;
}

.Selected .Info{
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.Selected .Price h4 {
    margin: 0;
    font-size: 2rem;
    color: #333;
}

.Selected .Price h4 span {
    font-size: 1rem;
    margin-left: 5px;
    font-weight: 400;
}

.Selected .Change {
    margin-top: 0.5rem;
}

.Selected .Change p{
    margin: 0;
}

.Selected .Change p span{
    margin: 0 5px;
}

.Selected .Others {
    display: flex;
}

.Selected .Others p{
    display: flex;
    justify-content: space-between;
    margin: 0;
    padding: 0.5rem;
    color: #333;
}

.Selected .Others p span{
    display: inline-block;
    margin-left: 20px;
    font-weight: 500;
}

.Selected .Others p span em{
    font-size: 0.5rem;
    font-style: normal;
    font-weight: 400;
    margin-left: 3px;
}

.Selected .Others > div:nth-child(n+2){
    padding-left: 30px;
}

</style>












