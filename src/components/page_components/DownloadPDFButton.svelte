<script>
    import { onMount, afterUpdate } from 'svelte';
    import { riskReport } from "../../store/RiskReport";
    import ArrowDown from "../icons/ArrowDown.svelte";
    import Spinner from "../search/Spinner.svelte";



    export let sectionToPrint = "";
    export let tempArray = [];
    let container;
    let show = false;

    let preparingReport = false;
	// const possiblePreparingStatues = ["Preparing to download, one sec...", "Creating final report, hold tight...",];
	const possiblePreparingStatues = ['Please wait...'];
	let preparingStatus = possiblePreparingStatues[0];

    function printDoc(divName) {
        window.print();

    }


</script>

<div id='preview-controls' class="preview-controls">
  <button class="cursor-pointer flex flex-row items-center h-9 justify-center rounded-r-md mr-2" on:click|preventDefault={()=>printDoc(sectionToPrint)}>
      
      <span class="flex items-center justify-center w-9 p-1.5 h-full bg-[#F17732] rounded-l-md">
          {#if !preparingReport && tempArray.length > 0}
              <ArrowDown color={'#fff'} icoHeight={16}/>
          {:else}
              <Spinner color={'#fff'} size={8}/>
          {/if}
      </span>
      <span class="download-text">
          {#if !preparingReport  && tempArray.length > 0}
              <p>Last ned</p>
          {:else}
              <p>{preparingStatus}</p>
          {/if}
      </span>
      
  </button>
  
</div>

<!-- <div class="fixed top-10 left-10 w-96 h-96 text-2xl bg-black z-50" id="preview-btn" >Hello</div> -->

<style>

    .preview-controls{
        @apply fixed bottom-10 right-0 md:left-auto md:right-10 z-50 hidden;
        flex-direction: column;
        align-items: center;
        margin-top: 1.4rem;
        margin-bottom: 1.4rem;
        page-break-before: avoid;
        z-index: 60;
    }

    .download-button{
        background-color: rgba(255, 0, 51, 1);
        color: white;
        padding: 0.2em 0.6em;
        font-size: 16pt;
        border-radius: 10px;
        user-select: none;
        transition: background-color ease-in-out 200ms;
    }

    .download-button:hover{
        background-color: rgb(209, 0, 42);
    }

    .download-text{
        @apply flex flex-row items-center h-full px-4 bg-darkfox-complimentary rounded-r-md text-base font-semibold text-[#F17732] select-none;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    }

    /* @media print {
      .preview-controls {
        display: none;
      } 
    } */

</style>