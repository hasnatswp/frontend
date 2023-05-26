<script>
  import { onMount } from "svelte";
  import SectionHeader from "../page_components/SectionHeader.svelte";
  import MapViewer from "../page_components/MapViewer.svelte";
  import { get } from 'svelte/store';
  import { riskReport } from '../../store/RiskReport';

  let map;

    onMount(async() => {
      const riskReportData = get(riskReport);
      map = riskReportData.map.map_data;
    })

</script>

{#if map}
	<SectionHeader headerText={"Kartoversikt"}/>
	<MapViewer 
		bind:mapOne={map.overview_layers.satellite} 
		bind:mapTwo={map.overview_layers.regulations} 
		bind:mapThree={map.overview_layers.area_usage} 
		bind:mapFour={map.overview_layers.property_borders}
		bind:mapBackground={map.overview_layers.background_color}/>
{/if}



