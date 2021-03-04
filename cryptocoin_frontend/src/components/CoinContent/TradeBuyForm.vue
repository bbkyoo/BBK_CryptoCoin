<template>
    <div class="Trade_Form">
        <div class="Form_List">
            <div class="Form_Title">
                <p>보유 원화</p>
            </div>
            <div class="Form_Des">
                <p><input type="text" placeholder="100,000,000"></p>
            </div>
        </div>
        <div class="Form_List">
            <div class="Form_Title">
                <p>매수 가격</p>
            </div>
            <div class="Form_Des">
                <p><input type="text" placeholder="100,000,000"></p>
            </div>
        </div>
        <div class="Form_List">
            <div class="Form_Title">
                <p>매수 수량</p>
            </div>
            <div class="Form_Des">
                <p><input type="text" placeholder="100,000,000"></p>
            </div>
        </div>
        <div class="Form_List">
            <div class="Form_Title">
                <p>매수 총액</p>
            </div>
            <div class="Form_Des">
                <p><input type="text" placeholder="100,000,000"></p>
            </div>
        </div>

        <div class="Form_Submit">
            <button type="submit" :style = "{backgroundColor: type === 'ASK' ? '#f14f4f' : '#7878e3'}" @click="trade">
                매수
            </button>  
        </div>
        
    </div>


</template>

<script>
export default {

}
</script>

<style>
.Trade_Form{
    padding: 0 3rem;
}
.Form_List{
    padding: 1rem 0;
}
.Form_List p {
    margin: 0;
}
.Form_List input {
    display: block;
    width: 100%;
    height: 2rem;
    border: none;
    border-bottom: 1px solid #d9d9d9;
    outline: none;
    font-size: 1.2rem;
}
.Form_List label {
    position: absolute;
    right: 0;
    bottom: 5px;
    font-size: 0.5rem;
    color: #333;
}
.Form_Des {
    position: relative;
}
.Form_Des p{
    font-size: 1.2rem;
}
.Form_Des p span{
    font-size: 0.5em;
    margin-left: 10px;
}
.Form_Submit{
    margin-top: 0.7rem;
}
.Form_Submit button{
    display: block;
    width: 100%;
    color: #fff;
    height: 2rem;
    font-size: 1rem;
    border: none;
    margin: 0;
    padding: 0;
    outline: none;
}

</style>













