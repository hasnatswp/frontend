<script>
    import PageHeader from "./page_components/PageHeader.svelte";
    import PageFooter from "./page_components/PageFooter.svelte";

    export let companyName;
    export let companyLogo;
    export let propertyId;
    export let propertyAddress;
    export let shortDate;
    export let pageNumber;
    export let companyUrl;
</script>

<div id="pdf-page">
    <div class="header-color-bar"></div>
    <div class="page-content">
        <PageHeader bind:companyName={companyName} companyLogo={companyLogo} bind:propertyID={propertyId} bind:propertyAddress={propertyAddress}/>
        <div class="inner-page-content">
            <slot></slot>
        </div>
        <PageFooter bind:currentDate={shortDate} pageNumber={pageNumber} bind:companyURL={companyUrl}/>
    </div>
</div>

<style>
    #pdf-page{
        @apply flex flex-col w-[768px] my-0 mx-auto bg-white mb-4;
        height: calc(var(--page-height) + 19.2px);
        min-height: calc(var(--page-height) + 19.2px);
        max-height: calc(var(--page-height) + 19.2px);
        page-break-before: always;
    }
    @media (max-width: 768px){
        #pdf-page{
            @apply flex flex-col w-[360px] my-0 mx-auto bg-white mb-4;
            height: calc(var(--page-height) + 19.2px);
            min-height: calc(var(--page-height) + 19.2px);
            max-height: calc(var(--page-height) + 19.2px);
            page-break-before: always;
        }
    }
    .header-color-bar{
        @apply w-full h-4 mb-4 bg-[#2744dc];
    }
    .inner-page-content {
        @apply flex flex-col w-full;
        height: calc(100% - 8rem);
    }
</style>

