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
            <TradeBuyForm></TradeBuyForm>
        </div>
        <div v-else>
            <TradeSellForm></TradeSellForm>
        </div>
    </div>
</template>

<script>
import TradeBuyForm from './TradeBuyForm' 
import TradeSellForm from './TradeSellForm'

export default {
    components: {
        TradeBuyForm,
        TradeSellForm
    },
    data(){
        return{
            Buy: false
        }
    },
    methods:{
        isBuy(){
            this.Buy = true
        },
        isSell(){
            this.Buy = false
        }
    }   
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












