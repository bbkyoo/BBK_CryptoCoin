<template>
    <div class="Coin">
        <div class="Coin_Name">
            <p>name</p>
            <span>code</span>
        </div>
        <div class="Coin_Price">
            <p>price</p>
        </div>
        <div class="Coin_Change_Price">
            <p>change_rate</p>
            <span>change_price</span>
        </div>
        <div class="Coin_Volume">
            <p>백만</p>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.Coin {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
       -moz-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    padding: 0.8rem 1rem;
    border-top: 1px solid #d9d9d9;
    cursor: pointer;
}
.Coin:hover {
    background: rgba(167, 182, 255, 0.2)
}
.Coin p {
    margin: 0;
    font-size: 0.9rem;
    color: #333;
    white-space: nowrap;
}
.Coin .Coin_Price {
    text-align: right;
    padding-right: 10px;
    -webkit-box-sizing: border-box;
       -moz-box-sizing: border-box;
            box-sizing: border-box;
    font-weight: 500;
}
.Coin .Coin_Name span {
    display: block;
    font-size: 0.65rem;
    color: #aaa;
}
.Coin .Coin_Change_Price {
    text-align: right;
}
.Coin .Coin_Change_Price span {
    display: block;
    font-size: 0.65em;
    text-align: right;
    color: inherit;
}
.Coin .Coin_Volume {
    text-align: right;
} 
.Coin .Coin_Volume p {
    font-size: 0.7em;
}

</style>

























