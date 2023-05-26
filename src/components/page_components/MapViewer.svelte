<script>
    export let mapOne, mapTwo, mapThree, mapFour, mapBackground;
    import { getNewWmsUrl, getNewSatelliteUrl } from "../../store/ImageUrls";

    let wms_size = 1200;
    
</script>

<div id="map-viewer">
    <div class="view-row">
        <div class="flex flex-col gap-2 items-center justify-center">
            <div class="layered-map">
                <img class="view-map map-top" src={getNewSatelliteUrl(mapOne, wms_size)} alt="Map View One">
            </div>
            <p class="layer-title">Satellittfoto</p>
        </div>
        <div class="flex flex-col gap-2 items-center justify-center">
            <div class="layered-map">
                <img class="view-map map-top" src={getNewWmsUrl(mapTwo, wms_size)} alt="Map View Two">
                <img class="view-map" src={getNewWmsUrl(mapBackground, wms_size)} alt="Map Background">
            </div>
            <p class="layer-title">Reguleringsplaner</p>
        </div>
        
    </div>
    <div class="view-row">
        <div class="flex flex-col gap-2 items-center justify-center">
            <div class="layered-map">
                <img class="view-map map-top" src={getNewWmsUrl(mapThree, wms_size)} alt="Map View Three">
                <img class="view-map" src={getNewWmsUrl(mapBackground, wms_size)} alt="Map Background">
            </div>
            <p class="layer-title">SSB Arealbruk</p>
        </div>
        <div class="flex flex-col gap-2 items-center justify-center">
            <div class="layered-map">
                <img class="view-map map-top" src={getNewWmsUrl(mapFour, wms_size)} alt="Map View Four">
                <img class="view-map" src={getNewWmsUrl(mapBackground, wms_size)} alt="Map Background">
            </div>
            <p class="layer-title">Vanlig kart</p>
        </div>
    </div>
</div>

<style>
    #map-viewer{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.2rem;
        break-inside: avoid;
        /* height: 50rem; */
    }

    .view-row{
        display: flex;
        gap: 1.2rem;
    }

    .layered-map{
        position: relative;
        display: inline-block;
        overflow: hidden;
        width: 19.5rem;
        height: 19.5rem;
    }

    .map-top{
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
    }

    .view-map{
        height: 20rem;
        width: 20rem;
    }

    .layer-title{
        @apply text-sm text-darkfox-aromatic;
    }

    
</style>