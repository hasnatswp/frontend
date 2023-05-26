<script>

    import { fly } from 'svelte/transition';
    import {onMount} from 'svelte';
    import ReportPreview from "../components/ReportPreviewV2.svelte";
    import Search from '../components/search/Search.svelte';
    import LoadReport from '../components/search/LoadReport.svelte';
    import { layersTooLarge, riskReport, layersLoaded, propertyIdNma } from "../store/RiskReport.js";
    import { push, link } from 'svelte-spa-router';
    import TooLarge from '../components/TooLarge.svelte';

    let parts = [];

    onMount(()=>{
        let urlPath = window.location.href;
        console.log('urlpath--------------->', urlPath);
        parts = urlPath.split('/');
        let kommune_nr = parts[5];
        let gnr = parts[6];
        let bnr = parts[7];
        let fnr = parts[8];
        let snr = parts[9];
        console.log('kommune_nr ======', parts[5]);
        propertyIdNma.set(`${kommune_nr}-${gnr}-${bnr}-${fnr}-${snr}`)
        getRiskReport(kommune_nr, gnr, bnr);
    })
    
    

    async function getRiskReport(knr, gnr, bnr){
        let property_id = knr + "-" + gnr.toString() + "-" + bnr + "-0-0";
        riskReport.set("loading");
        await riskReport.getRiskReport(property_id);
    }

    window.onbeforeunload = function () {
		push('/');
	}



</script>



<div class="report-generator">
    {#if !$layersTooLarge}
        {#if $layersLoaded}
            <div in:fly={{x: -20, delay: 320, duration: 300}} out:fly={{x: 20, duration: 300}}>
                <ReportPreview bind:reportData={$riskReport}/>
            </div>
        {:else}
            <LoadReport></LoadReport>
        {/if}
    {:else}
        <TooLarge/>
    {/if}
</div>

<style>

    .report-generator{
        @apply flex justify-center relative;
        width: 100%;
        height: 100%;
    }

    .report-generator > div{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.8rem;
        background-color: #fff;
        width: 100%;
        height: auto;
    }

</style>