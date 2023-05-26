<script>
    export let currency = "";
    export let lowEstimate, valueEstimate, upperEstimate;
</script>

<div id="valuation-viewer">
    <div class="estimate-container">
        <p class="estimate-value">{lowEstimate} {currency}</p>
        <p class="estimate-title">Lavt estimat</p>
    </div>

    <div class="estimate-container">
        <p class="estimate-value main-value">{valueEstimate} {currency}</p>
        <p class="estimate-title main-title">Meidan</p>
    </div>

    <div class="estimate-container">
        <p class="estimate-value">{upperEstimate} {currency}</p>
        <p class="estimate-title">Høyt estimat</p>
    </div>
</div>

<style>
    #valuation-viewer{
        display: flex;
        width: 100%;
        height: 12rem;
        margin: 0 auto 1rem auto;
        justify-content: center;
        gap: 0.6rem;
        padding: 1em;
        border: 1px solid #f0eff2;
        background-color: #fdfdfd;
        border-radius: 10px;
    }

    .estimate-container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 14rem;
        background-color: white;
        border: 1px solid #f0eff2;
        border-radius: 10px;
        gap: 1rem;
    }

    .estimate-value{
        font-size: 17pt;
        font-weight: 600;
        color: #b6a3f3;
    }

    .estimate-title{
        font-size: 12pt;
        font-weight: 500;
        color: #383055;
        user-select: none;
    }
    
    .main-value{
        color: #967cef;
        font-size: 19pt
    }

    .main-title {
        font-weight: 700;
    }
</style>