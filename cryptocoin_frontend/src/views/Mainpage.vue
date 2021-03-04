<template>
    <v-card class="Main_Page">
      <CoinContent/>
      <CoinListContainer/>
    </v-card>
</template>

<script>
import CoinContent from "../components/CoinContent/CoinContent"
import CoinListContainer from "../components/Wallet/CoinListContainer"

export default {
   components: {
     CoinContent,
     CoinListContainer
   } 
}
</script>

<style>
.Main_Page{
  display: flex;
  width: 1400px;
  margin: 0 auto;
  flex-flow: row wrap;
  justify-content: space-between;
  background-color: gray;
}

</style>

























