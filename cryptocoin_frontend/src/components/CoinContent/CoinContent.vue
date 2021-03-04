<template>
    <div class="Coin_Content">
        <CoinHead></CoinHead>
        <OrderBox></OrderBox>
    </div>
</template>

<script>
import CoinHead from "@/components/CoinContent/CoinHead"
import OrderBox from "@/components/CoinContent/OrderBox"

export default {
    components: {
        CoinHead,
        OrderBox    
    }
}
</script>

<style>
.Coin_Content{
    width: 960px;
    height: calc(100vh - 4rem);
    background: #fff;
    border-radius: 0.5rem;
    box-shadow: 4px 4px 8px rgba(0, 0, 0, .12);
    padding: 1rem;
    box-sizing: border-box;
}
</style>