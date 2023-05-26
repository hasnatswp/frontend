
<script>

    export let satellite_image;
    // export let property_borders;
    import { getNewWmsUrl, getNewSatelliteUrl } from "../../store/ImageUrls";

    let size = 450;

</script>

<div class="image-container">
    <img class="img" src={getNewSatelliteUrl(satellite_image, size)} alt="satellite">
    <!--<img class="img z-50" src={getNewWmsUrl(property_borders, size)} alt="property-borders">-->
</div>


<style>

    .image-container {
        @apply flex justify-center items-center w-full;
    }

    .img {
        @apply z-10 mt-4;
        width: 100%;
        height: 200px;
    }

</style>