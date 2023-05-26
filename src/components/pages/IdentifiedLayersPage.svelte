<script>
	import SectionHeader from '../page_components/SectionHeader.svelte';
	import RiskViewer from '../page_components/RiskViewer.svelte';
	import MapLayerIcon from '../page_components/MapLayerIcon.svelte';
	import { afterUpdate } from 'svelte';

	export let layersGroup = {};
	export let risk_assessment = {};

	afterUpdate(() => {
		console.log('LayersGroup', layersGroup);
	});

	export let dataArr;

	let imgWidth = 0;
	let marginWidth = 0;
	let factor;

	let gridCounter = [16, 25, 36, 49];

	function calculateSize(){
		compareNumber();
		console.log('factor form calculateSize--------------->', factor);
		marginWidth = 4 / factor;
		imgWidth = (100 / factor) - (2 * marginWidth);
	}

	function compareNumber(){
		for(let i = 0; i < gridCounter.length; i++){
			console.log('layers data from idenfiedLayers--->', dataArr.length);
			console.log('gridCounter value---------->', gridCounter[i]);
			if (dataArr.length <= gridCounter[i]) { /// 17 <= 16
				factor = Math.sqrt(gridCounter[i]);
				console.log('factor--------------->', factor);
				return;
			}
		}
	}

	calculateSize();

</script>


{#if Object.keys(risk_assessment).length > 0}

	<div class="risk-viewer">
		<!-- <SectionHeader headerText={'Risikorapport'} /> -->
		<div id="section-header-single">
			<p class="section-header-text">Risikorapport</p>
		</div>
		<RiskViewer
			bind:riskScore={risk_assessment.score}
			bind:assessedLayers={risk_assessment.assessed_layers}
			bind:identifiedLayers={risk_assessment.found_layers}
		/>
	</div>
	{#if Object.keys(layersGroup).length > 0}
		<div id="section-header-single mt-4">
			<p class="section-header-text">{`Identifiserte kartlag (${risk_assessment.found_layers})`}</p>
		</div>
		<div id="identified-layers-icons">
			{#each Object.values(layersGroup) as layers}
				{#each layers as layer}
					<MapLayerIcon {imgWidth} {marginWidth} iconTitle={layer.name} iconSrc={layer.icon} />
				{/each}
			{/each}
		</div>
	{/if}
{/if}


<style>
	#section-header-single{
        display: flex;
        align-items: center;
        width: 100%;
        margin: 1rem 1rem 0;
    }

    .section-header-text{
        @apply capitalize;
        font-size: 18pt;
        font-weight: bold;
        color: #3b3356;
        user-select: none;
		padding-left: .4rem;
		border-left: 6px solid #008A9A;
		line-height: 1.2;
		margin-block-start: 0rem; 
    	margin-block-end: 1.66rem; 

    }

    .accent-block{
        width: 0.4rem;
        height: 2rem;
        background-color: #008A9A;
    }
	#identified-layers-icons {
		@apply w-full;
	}

	@media print {
		#identified-layers-icons {
			display: block;
			width: 100%;
			page-break-after: auto;

		}

		/* .risk-viewer {
			page-break-inside: avoid;
			page-break-before: always;
		} */
	}
</style>
