<template>
<div class="Order_Box Section">
    <div class="Order_Inner"> 
        <OrderBook></OrderBook>
        <Trade></Trade>
    </div>
</div>   
</template>

<script>
import OrderBook from "@/components/CoinContent/OrderBook"
import Trade from "@/components/CoinContent/Trade"

export default {
    components: {
        OrderBook,
        Trade
    }
}
</script>

<style>
.Section {
    margin-top: 2rem;
    border-top: 1px solid #d9d9d9;
    padding: 1rem 0;
}

.Order_Box .Order_Inner{
    display: flex;
}

.Order_Box .Order_Inner > div{
    flex: 1;
}
</style>