<script>
    export let currency = "";
    export let lowEstimate, valueEstimate, upperEstimate;

    function getLocalValue(val){
        if(!isNaN(val)){
            const integer = parseInt(val);
            const moneyString = integer.toLocaleString('no-NO', {style: 'currency', currency: 'NOK', maximumFractionDigits: 0});
            return moneyString;
        }else{
            return '-';
        }
        
    }
</script>

<div id="valuation-viewer">
    <div class="estimate-container">
        <p class="estimate-value">{getLocalValue(lowEstimate)}</p>
        <p class="estimate-title">Lavt estimat</p>
    </div>

    <div class="estimate-container">
        <p class="estimate-value main-value">{getLocalValue(valueEstimate)}</p>
        <p class="estimate-title main-title">Median</p>
    </div>

    <div class="estimate-container">
        <p class="estimate-value">{getLocalValue(upperEstimate)}</p>
        <p class="estimate-title">Høyt estimat</p>
    </div>
</div>

<style>
    #valuation-viewer{
        display: flex;
        width: 100%;
        margin: 0 auto 1rem auto;
        justify-content: center;
        gap: 5px;

        padding: 0.5em;
        border: 1px solid #f0eff2;
        background-color: #fdfdfd;
        border-radius: 10px;
    }

    .estimate-container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        /* width: 14rem; */
        width: 100%;
        background-color: white;
        border: 1px solid #f0eff2;
        border-radius: 10px;
    }

    .estimate-value{
        font-size: 11pt;
        font-weight: 500;
        color: #b6a3f3;
    }

    .estimate-title{
        font-size: 10pt;
        font-weight: 400;
        color: #383055;
        user-select: none;
    }
    
    .main-value{
        color: #967cef;
        font-size: 11pt
    }

    .main-title {
        font-weight: 500;
    }
</style>