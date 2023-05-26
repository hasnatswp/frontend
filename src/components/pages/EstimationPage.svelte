<script>
	import ValuationViewerSmall from '../page_components/ValuationViewerSmall.svelte';
	import SeactionHeaderSmall from '../page_components/SeactionHeaderSmall.svelte';
	import HeaderImage from '../page_components/HeaderImage.svelte';
	import RiskSummary from '../page_components/RiskSummary.svelte';
	import { onMount } from 'svelte';
	import { get } from 'svelte/store';
	import { riskReport } from '../../store/RiskReport';

	let map;
	let valuation_estimate;
	let rental_estimate;
	export let risk_assessment = {};
	console.log('risk assessment---------------->', risk_assessment);
	let loaded = false;
	export let identified_layers;
	console.log('identified_layers from estimate page---------->', identified_layers);

	onMount(async () => {

		const riskReportData = get(riskReport);
		// valuation_estimate = riskReportData.valuation_estimate;
		valuation_estimate = riskReportData.valuation_data.valuation;
		rental_estimate = riskReportData.rental_estimate.rental_estimate;
		map = riskReportData.map.map_data;

		loaded = true;
	})

</script>

<div class="risk-summary">
	{#if loaded}
		<HeaderImage
			satellite_image={map.overview_layers.satellite}
			property_borders={map.overview_layers.property_borders}
		/>
		<!-- Do not delete the code below. it's used to control the width of the image -->
        <div class="flex text-xs invisible">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dol...</div>
		
		<SeactionHeaderSmall headerText={'Verdiestimat'} />
		<ValuationViewerSmall
			currency={'kr'}
			bind:lowEstimate={valuation_estimate.low_estimate}
			bind:valueEstimate={valuation_estimate.median}
			bind:upperEstimate={valuation_estimate.high_estimate}
		/>
		<SeactionHeaderSmall headerText={'Leieestimat'} />
		<ValuationViewerSmall
			currency={'kr'}
			bind:lowEstimate={valuation_estimate.rental_low_estimate}
			bind:valueEstimate={valuation_estimate.rental_median}
			bind:upperEstimate={valuation_estimate.rental_high_estimate}
		/>
		<SeactionHeaderSmall headerText={'Risikorapport'} />
		{#if Object.keys(risk_assessment).length > 0}
			<RiskSummary
				identified_layers={identified_layers}
				risk_assessment={risk_assessment.risk_summary}
			/> 
		{/if}

	{/if}
</div>


<style>
	.risk-summary{
		width: 100%;
		margin: 0 auto;
	}
</style>


