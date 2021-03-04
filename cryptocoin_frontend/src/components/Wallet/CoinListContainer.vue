<template>
    <div class="Coin_List_Container">
        <div class="Listing_Method">
            <div class="Method" >
                <p @click="haveCoin">원화거래</p>
            </div>
            <div class="Method" >
                <p @click="noHaveCoin">보유거래</p>
            </div>
        </div>
        <div v-if="isCoin">
            <CoinList/>
        </div>
        <div v-else>
            <HoldCoinList/>
        </div>
    </div>
</template>

<script>
import CoinList from './CoinList'
import HoldCoinList from './HoldCoinList'

export default {
data(){
    return{
        isCoin: true
    }
},
methods:{
    haveCoin(){
        this.isCoin = true
    },
    noHaveCoin(){
        this.isCoin = false
    }
},  
components:{
    CoinList,
    HoldCoinList
}
}
</script>

<style>
.Coin_List_Container{
    max-width: 430px;
    height: calc(100vh - 4rem);
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -moz-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    background: #fff;
    border-radius: 0.5rem;
    box-shadow: 4px 4px 8px rgba(0, 0, 0, .12);
    padding: 1rem 0;
}

.Listing_Method{
    display: flex;
    justify-content: center;
}
.Listing_Method .Method{
    margin-left: 1.5rem;
}
.Listing_Method .Method:first-child{
    margin-left: 0;
}
.Listing_Method .Method p {
    margin: 0;
    font-weight: 500;
    cursor: pointer;
    color: #b9b9b9;
}

.Listing_Method .Method p.on {
    color: #333;
}

</style>









