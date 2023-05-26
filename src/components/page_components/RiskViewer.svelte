<script>
    import { capitalizeFirstLetter } from '../../scripts/utils'

    import RiskLevel from './RiskLevel.svelte';

    export let riskScore;
    export let assessedLayers;
    export let identifiedLayers;
</script>

<div id="risk-viewer">
    <div class="risk-header">
        <div class="assessment">
            <h3 class="assessment-header">Overordnet risikovurdering</h3>
            <RiskLevel bind:currentRiskLevel={riskScore}/>
        </div>
        <!-- <div class="risk-score">
            <p class="risk-assessment" 
            class:low={riskScore == "lav" || riskScore == "ganske lav"}
            class:medium={riskScore == "medium"}
            class:high={riskScore == "høy" || riskScore == "veldig høy"}
            >{capitalizeFirstLetter(riskScore)}</p>
        </div> -->
    </div>
    <hr class="view-hr">
    <div class="risk-content">
        <div class="layer-view">
            <p class="layer-value">{assessedLayers}</p>
            <p class="layer-title">Vurderte kartlag</p>
        </div>
        <div class="layer-view">
            <p class="layer-value">{identifiedLayers}</p>
            <p class="layer-title">Identifiserte kartlag</p>
        </div>
    </div>
</div>

<style>
    #risk-viewer{
        width: 100%;
        margin: 0 auto 2rem;
        border: 1px solid #f0eff2;
        border-radius: 10px;
        padding: .8rem 0.4rem;
        background-color: #fdfdfd;
    }

    .risk-header{
        display: flex;
        justify-content: space-between;
        width: 96%;
        margin: 0 auto;
    }

    .assessment{
        display: flex;
        align-items: center;
        font-size: 14pt;
        font-weight: 500;
        gap: 2rem;
    }

    .risk-content{
        display: flex;
        justify-content: center;
        gap: 1rem;
    }

    .layer-view{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
        width: 20rem;
        background-color: white;
        border: 1px solid #f0eff2;
        padding: 1.2rem 1rem;
        border-radius: 10px;
    }

    .layer-value{
        color: #008A9A;
        font-size: 18pt;
        user-select: none;
    }

    .layer-title{
        color: #393156;
        font-size: 16pt;
        user-select: none;
    }

    .view-hr{
        @apply w-full my-3 outline-none border border-[#f0eff2];
    }

    .risk-assessment {
        padding-top: 0.25em;
        padding-bottom: 0.25rem;
        padding-left: 1rem;
        padding-right: 1rem;
        text-align: center;
        border-radius: 5px;
        color: white;
        user-select: none; 
    }


    .low{
        background-color: #17fd17;
    }

    .medium{
        background-color: #fdb717;;
    }

    .high{
        background-color: #fd1717;
    }

    @media print {
		#risk-viewer {
			break-inside: avoid;
		}
	}
</style>