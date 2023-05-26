<script>
    import SectionHeader from './SectionHeader.svelte';
	import InfoPage from './InfoPage.svelte';

    export let reportData;
    export let layerName;
    export let layer;

    function getLayerName(subLayer, count){
        if(count == 0){
            if(layer.length == 1){
                return subLayer.name;
            }else if(layer.length > 1){
                return layerName;
            }
        }
    }

</script>


{#each layer as currentLayer, i}

    <SectionHeader headerText={getLayerName(currentLayer, i)} />
    <InfoPage
        headerImagePropertyBorders={reportData.map.map_data.overview_layers
            .property_borders}
        headerImageForeground={currentLayer.link}
        bind:headerImageBackground={reportData.map.map_data.background
            .background_grayscale}
        srcInfo={{
            src_title: currentLayer.src_title,
            src_img: currentLayer.src_img
        }}
        bind:categories={currentLayer.categories}
        sections={[
            {
                title: 'Om kartlaget',
                type: 'text-block',
                data: currentLayer.about,
            },
            {
                title: 'Kjekt å vite',
                type: 'list',
                data: currentLayer.tips_and_tricks,
            },
        ]}
        companies={{ title: 'Sakkyndige', data: currentLayer.experts }}
        count={i}
        lastChild={layer.length}
    />
{/each}

<style>
    @media print {
		.chapter{
            break-before: always;
            page-break-before: always !important;
			/* break-after: always;
            page-break-after: always !important; */
		}
    }
</style>
