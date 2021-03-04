<template>
    <div class="Coin_Head">
        <div class="Selected">
            <div class="Name">
                <h3> 비트코인 </h3>    
            </div>
            <div class="Info">
                <div class="Price">
                    <h4>
                        58,227,000
                        <span>-</span> 
                    </h4>
                    <div class="Change">
                        <p>
                            전일대비:{' '}
                            <span>
                                5.70 % 
                            </span>
                            <span>
                                -3,517,000 KRW
                            </span>
                        </p>
                    </div>
                </div>

                <div class="Others">
                    <div class="High_Low">
                        <p>
                            고가
                            <span>
                                61,760,000 KRW
                            </span>
                        </p>
                        <p>
                            저가
                            <span>
                                58,118,000 KRW
                            </span>
                        </p>
                    </div>
                    <div class="Volume">
                        <p>
                            거래량(24H)
                            <span>
                                29,171 BTC
                                <em>-</em>
                            </span>
                        </p>
                        <p>
                            거대금(24H)
                            <span>
                                1,777,117,679,141KRW
                                <em>-</em>
                            </span>
                        </p>
                    </div> 
                </div>    
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.Selected .Name{
    padding-bottom: 1rem;
    border-bottom: 1px solid #d9d9d9;
}

.Selected .Name .h3{
    margin: 0;
    font-size: 2rem;
    padding-left: 2.5rem;
    background-size: 1.8rem;
    background-repeat: no-repeat;
    background-position: left center;
}

.Selected .Info{
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.Selected .Price h4 {
    margin: 0;
    font-size: 2rem;
    color: #333;
}

.Selected .Price h4 span {
    font-size: 1rem;
    margin-left: 5px;
    font-weight: 400;
}

.Selected .Change {
    margin-top: 0.5rem;
}

.Selected .Change p{
    margin: 0;
}

.Selected .Change p span{
    margin: 0 5px;
}

.Selected .Others {
    display: flex;
}

.Selected .Others p{
    display: flex;
    justify-content: space-between;
    margin: 0;
    padding: 0.5rem;
    color: #333;
}

.Selected .Others p span{
    display: inline-block;
    margin-left: 20px;
    font-weight: 500;
}

.Selected .Others p span em{
    font-size: 0.5rem;
    font-style: normal;
    font-weight: 400;
    margin-left: 3px;
}

.Selected .Others > div:nth-child(n+2){
    padding-left: 30px;
}

</style>












