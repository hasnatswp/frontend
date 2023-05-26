

<script>

import SearchResult from "./SearchResult.svelte";
import { propertySearch }   from "../../store/SearchStore.js";

let searchInput = '';
let showResults = false;
let type_timer;


function handleSearch() {
    clearTimeout(type_timer);
    type_timer = setTimeout(done_typing, 700);
    propertySearch.set('loading');
    showResults = true;
}


function done_typing() {
    if(searchInput.length < 1){
        showResults = false;
    } else {
        showResults = true;
        propertySearch.doSearch(searchInput);
    }
}

</script>


<div class="search-container">
    <div class="search-form-container">
        <form action="" class="search-form">
            <input  bind:value={searchInput} on:input={handleSearch} type="text" class="search-input" placeholder="Sandbakken 7, 3911 Porsgrunn">
            <button on:click|preventDefault={handleSearch} class="search-button">
                <img src="./img/arrow-right-white.svg" alt="">
            </button>
        </form>

        
    </div>
    <SearchResult bind:show={showResults}/>
</div>


<style>

.search-container {
    @apply flex flex-col w-full items-center ;
    }

.search-form-container {
    @apply flex h-16 justify-between bg-white rounded-xl mb-5 relative w-full shadow-lg;
}

.search-form {
     @apply shadow-lg flex w-full h-full items-center rounded-md;
    }

.search-input{
    @apply flex bg-white h-full rounded-xl content-center border-none ring-0 pl-8 pr-4;
    width: calc(100% - 3rem);
}

.search-input:focus {
        @apply ring-0;
    }


.search-button {
    @apply flex justify-center items-center w-8 h-8 rounded-full bg-[#008A9A] text-white outline-none cursor-pointer mr-4;
}
</style>