<script>
    import { srcInfoBox } from '../../store/RiskReport';
    import { capitalizeFirstLetter, removeUnderscore } from '../../scripts/utils'
    import { getNewWmsUrl } from "../../store/ImageUrls";
    export let headerImageBackground, headerImageForeground, headerImagePropertyBorders;
    export let srcInfo = {src_title: "", src_img: "", };
    export let categories = [{name: "", icon: "", }]
    export let sections = [{title: "", type: "", data: []}];
    export let companies = {title: "", data: []};

    import ExpertImage from './ExpertImage.svelte';

    import { onMount } from 'svelte';

    
    function replaceWithCDN(icon) {
        icon = icon.replace("https://riskreport-assets.s3.eu-north-1.amazonaws.com/", "https://d1mxvo84fosfrf.cloudfront.net/")
        return icon;
    }

    const size = 450;
    const numberOfCategories = categories.length; 

    export let count;
    export let lastChild;

</script>

<div id="info-page">
    <div class="image-height">
        <img class="image image-height" src={getNewWmsUrl(headerImageBackground, size)} alt="header map">
        <img class="foreground-image image image-height opacity-70" src={getNewWmsUrl(headerImageForeground, size)} alt="header map">
        <img class="foreground-image image image-height" src={getNewWmsUrl(headerImagePropertyBorders, size)} alt="header map">
        
    </div>
    
    <div class="categories">
        {#each categories as category}
            <div class="category">
                <img class="category-icon" src={replaceWithCDN(category.icon)} alt="category icon">
                <span class="category-name">{category.description}</span>
            </div>
        {/each}
    </div>
    <!-- Do not delete the code below. it's used to control the width of the image -->
    <div class="flex text-xs invisible">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dol...</div>

    {#if lastChild == count+1}
        <div class="info-content">
            {#each sections as section}
                {#if section.data.length > 0}
                    <div class="info-data">
                        <h3 class="section-title">{removeUnderscore(section.title)}</h3>
                        {#if section.type == "text-block"}
                            <p class="body-text">{section.data}</p>
                        {:else if section.type = "list"}
                            <ul>
                                {#each section.data as content}
                                    <li class="body-text">{content}</li>
                                {/each}
                            </ul>
                        {/if}
                    </div>
                {/if}
            {/each}
            <!-- <div on:scroll={srcInfoBox.set({
                'src_title': srcInfo.src_title,
                'src_img': srcInfo.src_img
            })}></div> -->
            <div class="absolute right-1 -bottom-24 bg-white flex flex-row items-center z-50">
                <div class="text-container">
                    <span class="category-name break-words">{srcInfo.src_title}</span>
                </div>
                <img class="banner-icon" src={srcInfo.src_img} alt="category icon">
            </div>
        </div>

        <!-- <div class="companies-section">
            <h3 class="section-title">{companies.title}</h3>
            <div class="company-icons">
                {#each companies.data as icon}
                    <ExpertImage icon={icon}></ExpertImage>
                {/each}
            </div>
        </div> -->
    {/if}

</div>

<style>
    #info-page{
        width: 100%;
        margin: 0 auto;
        position: relative;
    }

    ul {
        padding-left: 20px;
    }

    .info-header{
        position: relative;
        user-select: none;
    }

    .image-height {
        height: 220px;
    }

    .image {
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
    }

    .foreground-image{
        position: absolute;
        top: 0;
        left: 0;
        z-index: 50;

    }
    .categories{
        @apply w-full block text-left gap-x-6 gap-y-4 mt-3;
        user-select: none;
    }

    .category{
        @apply inline-block pr-4;
    }

    .category-icon{
        @apply inline pt-0 pr-2;
        width: 1.4rem;
        height: 0.9rem;
    }

    .category-name {
        @apply w-full;
        font-size: 10pt;
    }

    
    .body-text {
        font-size: 11pt;
    }

    .info-content{
        display: flex;
        flex-direction: column;
    }

    .info-data{
        display: flex;
        flex-direction: column;
        gap: 0.8rem;
        margin-bottom: 1rem;
    }

    .section-title{
        font-size: 14pt;
        font-weight: bold;
        user-select: none;
    }

    .companies-section{
        display: flex;
        flex-direction: column;
        gap: 1.4rem;
        margin-bottom: 1.5rem;
        break-inside: avoid !important;
        page-break-inside: avoid !important;
    }
    .text-container{
        @apply inline-block px-3 py-2;
        /* max-width: 15rem; */
    }
    .banner-icon{
        @apply inline p-2 pl-0;
        width: 3rem;
        height: 3rem;
    }

    .company-icons{
        @apply grid grid-cols-5 gap-4 items-center;
        user-select: none;
        /* page-break-after: always; */
    }
    @media print{
        .header-color-bar{
            background-color: #2744dc!important;
            -webkit-print-color-adjust: exact;
        }
        img.category-icon, .image-height, .image-height>img {
            break-inside: avoid !important;
            page-break-inside: avoid !important;
        }
        
    }

</style>