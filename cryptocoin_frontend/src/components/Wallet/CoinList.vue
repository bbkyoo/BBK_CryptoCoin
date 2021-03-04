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
            <Coin></Coin>
        </div>
    </div>
</template>

<script>
import Coin from './Coin.vue'

export default {
    components: {
        Coin
    },

    data(){
        return {
        }
    },
    methods: {  
    },
    mounted() {     
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
.Coins::-webkit-scrollbar{
    width: 5px;
    height: 5px;
}
.Coins::-webkit-scrollbar-track{
    background-color: transparent;
}
.Coins::-webkit-scrollbar-track-piece{
    background-color: transparent;
}
.Coins::-webkit-scrollbar-thumb{
    border-radius: 8px;
    background-color: #d9d9d9;
}
.Coins::-webkit-scrollbar-button:start{
    background-color: transparent;  /* Top, Left 방향의 이동버튼 */
}
.Coins::-webkit-scrollbar-button:end{
    background-color: transparent; /* Bottom, Right 방향의 이동버튼 */
}

</style>






















