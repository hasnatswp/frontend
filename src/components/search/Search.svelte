<script>

    import SearchBar from "./SearchBar.svelte";
    import {onMount} from 'svelte';
    import {push} from 'svelte-spa-router';

</script>


<div class="search-page-container">
    <div class="search-inner-wrapper">
        <h1 class="search-header">Søk</h1>
        <p class="search-subheader">Finn risikorapport for en hver norsk eiendom ved å søke på adresse eller matrikkelnummer i søkeboksen</p>
        <SearchBar></SearchBar>
    </div>
</div>



<style>

    .search-page-container {
        @apply w-full h-full flex flex-col items-center justify-center;
    }
    .search-inner-wrapper{
        @apply w-11/12 sm:w-3/4 md:w-2/3 xl:w-3/5 2xl:w-5/12 h-64 mt-44;
    }

    .search-header {
        @apply text-3xl text-center font-bold mb-3 text-darkfox-accent;
    }

    .search-subheader {
        @apply flex w-3/4 justify-center text-sm mb-10 text-center px-2 mx-auto;
    }


</style>