<script>
	import { fly } 	from 'svelte/transition';
	import Spinner from "./Spinner.svelte"
	import { propertySearch, redirectHandler }	from "../../store/SearchStore.js";
    import { riskReport } from "../../store/RiskReport.js";
	import { push, link } from 'svelte-spa-router';

	export let show = false;
	export let style = '';

	export const Search = "/";

	async function getRiskReport(prop){
		if(prop.kommune_nr && prop.gnr && prop.bnr){
			const path = `/risk-report/${prop.kommune_nr}/${prop.gnr}/${prop.bnr}`;

			return path;
		}else{
			console.error('invalid url!')
		}
	}

</script>
    

{#if show}
	<div class="search-result-container" style={style}>
		{#if $propertySearch != 'loading'}
			{#if $propertySearch && $propertySearch.length  }
				<table class="w-full max-h-56 md:max-h-72 xl:max-h-96" in:fly="{{ y: 100, duration: 500 }}">
					<tr class="search-result-table-row border-b border-darkfox-purple-light rounded-t-lg search-result-table-row-header">
						<th class="search-header-cell search-result-table-first_col">Adresse</th>
						<th class="search-header-cell search-result-text-col">Matrikkel</th>
						<th class="search-header-cell search-result-arrow-col"></th>
					</tr>
					{#each $propertySearch as searchResult}
						<a href use:link={redirectHandler(searchResult.propertyIdNma)}>
							<tr class="search-result-table-row">
								<td class="search-row-cell search-result-table-first_col capitalize">
									{searchResult.address || '----'}
								</td>
								<td class="search-row-cell search-result-text-col">{searchResult.propertyIdNma}</td>
								<td class="search-row-cell search-result-arrow-col"><img src="/img/arrow-right-gray.svg" alt=""></td>
							</tr>
						</a>
					{/each}
				</table>
			{:else}
				<div class="flex w-full h-44 justify-center items-center">
					<img src="/img/NoResultFound.png" alt="Ingen resultater">
				</div>
			{/if}
		{:else}
			<div class="flex w-full h-44 justify-center items-center">
				<Spinner></Spinner>
			</div>
		{/if}
	
	</div>
{/if}



<style>


	.search-result-container {
		@apply flex w-full bg-white rounded-xl shadow-md overflow-y-auto;
		max-height: 24rem;
	}


.search-header-cell {
    @apply flex h-full items-center font-semibold;
    }

.search-row-cell {
    @apply flex h-full items-center;
    }

.search-row-cell:hover{
    cursor: pointer;
    }

.search-result-table-row {
    @apply flex text-left text-xs lg:text-sm h-12 items-center px-6 text-darkfox-semidark-gray hover:bg-darkfox-medium-gray;
}

.search-result-table-row-header {
    @apply bg-white sticky top-0;
}
.search-result-table-first_col {
    width: 60%;
    }

.search-result-text-col {
    width: 40%;
    }

.search-result-arrow-col {
    @apply  justify-end;
    width: 10%;
    }

</style>