<script>
	import { capitalizeFirstLetter, getMonthFromID } from '../scripts/utils';
	import { createEventDispatcher, onMount, afterUpdate } from 'svelte';

	const dispatch = createEventDispatcher();

	import { location } from 'svelte-spa-router';


	import CoverPage from './page_components/CoverPage.svelte';
	import SectionHeader from './page_components/SectionHeader.svelte';
	import InfoPage from './page_components/InfoPage.svelte';
	import NeighboorhoodProfile from './page_components/NeighboorhoodProfile.svelte';
	import { riskReport, groupByKey, layersLoaded, srcInfoBox } from '../store/RiskReport.js';
	import EstimationPage from './pages/EstimationPage.svelte';
	import { get } from 'svelte/store';
	import MapPage from './pages/MapPage.svelte';
	import IdentifiedLayersPage from './pages/IdentifiedLayersPage.svelte';
	import DownloadPdfButton from './page_components/DownloadPDFButton.svelte';


	import SingleMapLayer from './page_components/SingleMapLayer.svelte';

	export let reportData;

	const defaultPageCount = 4;
	let currentPageCount = defaultPageCount;

	let companyName = 'PropCloud';
	let companyLogo = './nordeca-logo.png';
	let riskAssessment = {};

	const currentdate = new Date();

	const currentDay = currentdate.getDate();
	const currentMonth = currentdate.getMonth();
	const currentYear = currentdate.getFullYear();

	let shortDate = `${currentDay}.${currentMonth + 1}.${currentYear}`;
	let companyURL = 'https://www.propcloud.no/';

	let identified_layers = [];

    let longDate = `${currentDay}.${getMonthFromID(currentMonth)} ${currentYear}`;

	let tempArray = [];
	let keySet = new Set();

	let newData = {};

	onMount(async () => {

		tempArray = [];

		reportData = get(riskReport);

		// const { property, map, neighborhood_score, identified_layers, riskAssessment } = reportData;
		identified_layers = reportData.identified_layers;
		riskAssessment = reportData.riskAssessment;

		currentPageCount += identified_layers.length;
		// console.log('identified_layers data from ------------------>', identified_layers);
		newData = { ...groupByKey(identified_layers, 'group') };
		console.log('new data from ------------------>', newData);
		for (let sameKey of Object.keys(newData)) {
			keySet.add(sameKey);
		}

		tempArray = Array.from(keySet);
		tempArray = Object.keys(newData);
		// console.log('tempArray data------>', tempArray);
		
		setTimeout(() => {
			positionDownloadBtn();
		}, 500 * currentPageCount);
	});



	function positionDownloadBtn(){
        const btnElements = document.querySelectorAll("#preview-controls");
        // console.log(btnElements);
        console.debug(btnElements);
        for(let i = 0; i < btnElements.length; i++){
            if(i === 0) {
                btnElements[i].setAttribute("style", "position: fixed;");
				btnElements[i].style.display = "flex";
				btnElements[i].addEventListener('click', () => {
					window.print();
				})
            }else {
                btnElements[i].remove();
            }
        }
	}

	console.log('report data-------------> ', reportData.identified_layers);

	// let srcInfo = {
	// 	src_title: 'test',
	// 	src_img: ''
	// };

    
</script>

<svelte:head>
	<link rel="stylesheet" type="text/css" href="/style/style.css">
	<script src="/script/paged.polyfill.js"/>
</svelte:head>

<DownloadPdfButton sectionToPrint="report-preview" {tempArray}/>

<div id="report-preview" class="report-preview">

	<div class="header" id="header">
		<div class="w-full h-5 bg-[#008A9A]"></div>
		<div class="w-full flex flex-row justify-between items-center px-[4.5rem] py-3 border-b border-darkfox-aromatic-15">
			<div class="header-logo flex flex-row items-center space-x-3">
				<img class="w-auto h-10 object-contain" src='./nordeca-logo.png' alt="company logo">
			</div>
			<!-- <div class="property-info">
				<p>{reportData.property.property_details.address_id}</p>
				<p>|</p>
				<p>{reportData.property.property_details.address}</p>
			</div> -->
		</div>
	</div>

	<!-- {#if $srcInfoBox}
		<div class="label-container fixed bottom-16 right-20 flex flex-row items-center z-50">
			<div class="text-container">
				<span class="category-name break-words">{$srcInfoBox.src_title}</span>
			</div>
			<img class="banner-icon" src={$srcInfoBox.src_img} alt="category icon">
		</div>
	{/if} -->

	<div class="footer" id="footer">
		<div class="w-full grid grid-cols-3 items-center px-[4.5rem] py-4 border-t border-darkfox-aromatic-15">
			<div class="date-info">
				<p>{shortDate}</p>
			</div>
			<div class="property-info">
				<p>nordeca.com</p>
			</div>
			<div class="page-counter"></div>
		</div>
	</div>

	<div class="wrapper">
		<CoverPage
			bind:poweredByName={companyName}
			bind:generatedDate={longDate}
			coverPage={true}
		/>
		
		<div class="counter-reset"></div>
		
		<!-- <section class="chapter">
			<EstimationPage
				identified_layers={reportData.identified_layers}
				bind:risk_assessment={riskAssessment.risk_assessment}
			/>
		</section> -->

		<section class="chapter">
			<IdentifiedLayersPage
				dataArr={reportData.identified_layers}
				bind:risk_assessment={riskAssessment.risk_assessment}
				bind:layersGroup={newData}
			/>
		</section>
		
		<!-- <section class="chapter">
			{#if reportData.neighborhood_score}
				<NeighboorhoodProfile
					neighborhoodScore={reportData.neighborhood_score}
				/>
			{/if}
		</section> -->

		
		<section class="chapter">
			<MapPage />
		</section>

		{#if Object.keys(newData).length > 0}
			{#each Object.entries(newData) as [layerName, layer]}
				<section class="chapter">
					<SingleMapLayer {reportData} {layerName} {layer}/>
				</section>
			{/each}
		{/if}
	</div>
</div>

<style>

	.header, .footer {
		position: fixed;
		margin: 0 auto;
		width: 100%;
		display: none;
		left: 0;
	}

	.header {
        @apply top-0;
    }
    .footer {
		@apply bottom-0;
    }
	
	@page{
		size : A4;
        margin: 26mm 20mm 14mm;
	}	

	

    .company-text{
        font-size: 12pt;
        color: #2328c2;
        font-weight: 600;
    }
	.date-info{
        gap: 1rem;
        font-size: 10pt;
        color: #77718a;
    }

	:global(.cover-page) { 
		page: cover-page; 
	}
	.cover-page h1 { 
		border-bottom: 0.25rem solid white; 
	}
	.cover-page h3 { 
		font-weight: normal; 
	}

	@page cover-page {
		margin: 0mm;
		@top-right { content: none }
		@top-left {	content: none }
		@top-center { content: none }
		@bottom-left { content: none; }
		@bottom-center { content: none }
		@bottom-right { content: none; }
	}

	:global(.pagedjs_first_page .header[style]) {
		display: none !important;
	}

	:global(.pagedjs_first_page .footer[style]) {
		display: none !important;
	}

	:global(.pagedjs_first_page .pagedjs_margin-bottom .footer[style]) {
		display: none !important;
	}

	.property-info{
        display: flex;
        align-items: center;
        gap: 1rem;
        font-size: 10pt;
        color: #77718a;
		justify-content: center;
    }

    @media print {
		.report-preview, .wrapper { 
			float: none !important;
			position: relative;
			width: 100%;
		}
		.wrapper{
			width: 100%;
		}
        .header, .footer {
            display: block !important;
        }
		.header {
			@apply top-0;
		}
		.chapter{
			break-after: always;
            page-break-after: always !important;
		}
    }
	@page :first {
		margin: 0 !important;
	}

	:global(.pagedjs_first_page) {
		margin: 0 !important;
	}
	:global(.pagedjs_first_page .pagedjs_margin-bottom-center .pagedjs_margin-content::after) {
		content: none !important;
	}

   
</style>
