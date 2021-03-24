<template>
    <div class="Orderbook_List">
        <div class="OrderBook_Size">
            <p>{{ bid_quantity }}</p>
        </div>
        <div class="OrderBook_Price">
            <p>{{ bid_price }}</p>
            <p>{{ ask_price }}</p> 
        </div>
        <div class="OrderBook_Size">
            <p>{{ ask_quantity }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props:['bid_price', 
        'bid_quantity', 
        'ask_price', 
        'ask_quantity']
}
</script>

<style>

</style>
