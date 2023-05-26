<script>
    import { riskReport, propertyIdNma } from "../../store/RiskReport.js";

    import { onMount } from "svelte";
    import { get } from "svelte/store";
    import { capitalizeFirstLetter, getMonthFromID } from '../../scripts/utils.js';

    let companyLogo = "./nordeca-logo.png";

    export let poweredByName = "PropCloud";
    let poweredByLogo = "./favicon-pc.png";

    let coverTitle = "Insight Property Risikorapport";

    const currentdate = new Date();
    const currentDay = currentdate.getDate();
    const currentMonth = currentdate.getMonth();
    const currentYear = currentdate.getFullYear();
    let generatedDate = `${currentDay}.${getMonthFromID(currentMonth)} ${currentYear}`
    
    let coverInfo = {lineOne: "", lineTwo: "", lineThree: ""};


    onMount(async () => {
        const reportData = get(riskReport);

        // const data = reportData.property.property_details;
        // coverInfo = {lineOne: "Adresse:", lineTwo: data.address, lineThree: data.address_id};
    })

    export let coverPage = false;

</script>

<div class="cover-page">
    <div class="header-color-bar"></div>
    <div class="header-info">
        <div class="logo-holder">
            <img class="company-logo" src={companyLogo} alt="company logo">
            <!-- <p class="company-name">{companyName}</p> -->
        </div>
    
        <h1 class="cover-title">{coverTitle}</h1>
    </div>

    <div class="cover-info">
        <p class="info-header">Adresse</p>
        <p class="info-text">{$propertyIdNma}</p>
    </div>

    <div class="generated-info">
        <p class="generated-text">Rapport generert:</p>
        <p class="generated-date">{generatedDate}</p>
    </div>

    <div class="powered-info flex items-center gap-3 justify-center">
        <img class="powered-logo w-14" src={poweredByLogo} alt="powered by logo">
        <div class="powered-text-holder">
            <p class="powered-text text-xs font-bold text-[#051E66]">Powered by:</p>
            <p class="powered-name text-lg text-[#2328C2] font-semibold">{poweredByName}</p>
        </div>
    </div>

    {#if coverPage}
        <div class="image-container">
            <img src="./cover-bottom-bg.png" alt="bottom bg">
        </div>
    {/if}
    
</div>

<style>
    .cover-page{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        width: 100%;
        height: 1122px;
        gap: 6rem;
        border-right: 1px solid #e9e8ec;
    }
    .image-container{
        @apply w-full h-auto;
    }


    .image-container > img{
        width: 100%;
    }

    .header-color-bar{
        background-color: #008A9A;
        width: 100%;
        height: 1.25rem;
    }

    .header-info{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
    }

    .logo-holder{
        display: flex;
        align-items: center;
        gap: 1rem;
        user-select: none;
    }
    
    .company-logo{
        @apply h-12;
    }

    .company-name{
        @apply text-[14pt] text-[#1E3A46] font-semibold;
    }

    .cover-title{
        @apply text-[46pt] text-[#1E3A46] font-semibold select-none text-center;
    }

    .cover-info{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.8rem;
    }

    .info-header{
        font-size: 16pt;
        color: #716a85;
        font-weight: 500;
        user-select: none;
    }

    .info-text{
        font-size: 14pt;
        color: #3b3356;
    }

    .generated-info{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.76rem;
        user-select: none;
    }
    
    .generated-text{
        font-size: 12pt;
        color: #716a85;
    }

    .generated-date{
        font-size: 14pt;
        color: #3b3356;
    }

    /* @media print{
        .logo-holder{
            margin-top: 80px;
            margin-bottom: 10px;
        }
        .cover-title{
            margin-bottom: 80px;
        }
        .cover-info{
            margin-bottom: 80px;
        }
        .generated-info{
           margin-bottom: 80px; 
        }
    }

    .cover-page { 
        page: cover-page; 
    }

    @page cover-page {
        @top-right { content: none }
        @top-left {	content: none }
        @top-center { content: none }
        @bottom-left { content: none; }
        @bottom-center { content: none }
        @bottom-right { content: none; }
    } */

</style>