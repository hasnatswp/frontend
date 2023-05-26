

<script>
    import { element } from "svelte/internal";

    export let risk_assessment;
    export let identified_layers;

    
    const risk_assessment_layer_names = risk_assessment.map(risk_assessment_layer => risk_assessment_layer.name);;
    const identified_layers_names = identified_layers.map(identified_layer => identified_layer.name);

    let summary_layers = [];

    const summary_layer_names = [
        "Radon aktsomhet",
        "Støykartlegging veg etter T-1442",
        "Støysoner Forsvarets lufthavner",
        "Naturvernområde",
        "Verdifulle kulturlandskap",
        "5000 års skredfaresoner",
        "Flom aktsomhetsområder",
        "Kvikkleire",
        "Utvalgte naturtyper",
        "Friluftslivsområde - Kartlagt"
    ]

    identified_layers_names.forEach(element => {
        console.log('element -------------->', element);
        if(summary_layer_names.includes(element)){
            summary_layers.push(risk_assessment[risk_assessment_layer_names.indexOf(element)])
        }
    })

    risk_assessment.forEach(element => {
        if(!identified_layers_names.includes(element.name) && summary_layer_names.includes(element.name)){
            summary_layers.push(element);
        }
    })

    // console.log('identified_layers_names ------------>', identified_layers);

</script>


<div class="summary-layer">
    {#each summary_layers as risk_layer}

        <div class="flex justify-between text-xs border-b border-darkfox-ash border-opacity-50 py-1">
            <div class="flex items-center">{risk_layer.name}</div>
            {#if risk_layer.found}
                <div class="risk-layer-div ">
                    <p class="text-darkfox-gray italic mr-6 py-1">Se kartlag på slide {identified_layers_names.indexOf(risk_layer.name) + 5}</p>
                    <p class="found-name found">Ja</p>
                </div>
            {:else}
                <div class="risk-layer-div">
                    <p class="found-name not-found">Nei</p>
                </div>
            {/if}
            
        </div>
    {/each}
</div>

<style>
    .summary-layer {
        @apply flex flex-col w-full px-4 pb-8;
    }

    .risk-layer-div {
        @apply flex justify-between;
    }
    
    .found-name {
        @apply flex justify-center w-12 text-white rounded-md py-1;
    }

    .found {
        background-color: #F14368;
    }

    .not-found {
        background-color: #2CB66B;
    }

    #page-number::after{
        content: " | Page " target-counter(attr(href), page);
    }

</style>


