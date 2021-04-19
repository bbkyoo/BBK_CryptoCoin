<template>
    <div class="Hold_Coin Coin"> 
        <div class="Coin_Name">
            <p>{{ coinname }}</p>
        </div>
        <div class="Coin_Price">
            <p>
                <span>{{ evaluation_fee }}</span>
            </p>
        </div>
        <div class="Coin_Change_Price">
            <p>
            {{ fluctate_rate }}
            </p>
        </div>
        <div class="Coin_Average">
            <p>
                <span>
                    {{ average_price }}
                </span>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    props: [
    "coinname",
    "evaluation_fee",
    "quantity",
    "fluctate_rate",
    "original_total",
    "average_price"
    ],
}
</script>

<style>

</style>