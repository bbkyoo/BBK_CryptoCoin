<template>
    <div class="Orderbook_List">
        <div class="OrderBook_Size" @click="emitBids()">
            <p>{{ bid_quantity }}</p>
        </div>
        <div class="OrderBook_Price">
            <p>{{ bid_price }}</p>
            <p>{{ ask_price }}</p> 
        </div>
        <div class="OrderBook_Size" @click="emitAsks()">
            <p>{{ ask_quantity }}</p>
        </div>
    </div>
</template>

<script>
import { eventBus } from "../../main"

export default {
    props:['bid_price', 
        'bid_quantity', 
        'ask_price', 
        'ask_quantity'],
    methods:{
        emitBids(){
            eventBus.$emit('bids',
                this.bid_price    
            )
        },
        emitAsks(){
            eventBus.$emit('asks',
                this.ask_price    
            )
        }        
    }
}
</script>

<style>

</style>
