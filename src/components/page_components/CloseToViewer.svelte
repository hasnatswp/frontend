<script>
    import CloseToItem from "./CloseToItem.svelte";

    export let closeToLocations = [{name: "", icon: "", distance: ""}];
</script>

<div id="close-to-viewer">
    <div class="left-section">
        <div class="close-section top-left">
            {#if closeToLocations[0]}
            <CloseToItem bind:itemInfo={closeToLocations[0]}/>
            {/if}
        </div>
        <div class="close-section">
            {#if closeToLocations[2]}
            <CloseToItem bind:itemInfo={closeToLocations[2]}/>
            {/if}
        </div>
        <div class="close-section">
            {#if closeToLocations[4]}
            <CloseToItem bind:itemInfo={closeToLocations[4]}/>
            {/if}
        </div>
        <div class="close-section">
            {#if closeToLocations[6]}
            <CloseToItem bind:itemInfo={closeToLocations[6]}/>
            {/if}
        </div>
        <div class="close-section bottom-left">
            {#if closeToLocations[8]}
            <CloseToItem bind:itemInfo={closeToLocations[8]}/>
            {/if}
        </div>
    </div>

    <div class="right-section">
        <div class="close-section top-right">
            {#if closeToLocations[1]}
            <CloseToItem bind:itemInfo={closeToLocations[1]}/>
            {/if}
        </div>
        <div class="close-section">
            {#if closeToLocations[3]}
            <CloseToItem bind:itemInfo={closeToLocations[3]}/>
            {/if}
        </div>
        <div class="close-section">
            {#if closeToLocations[5]}
            <CloseToItem bind:itemInfo={closeToLocations[5]}/>
            {/if}
        </div>
        <div class="close-section">
            {#if closeToLocations[7]}
            <CloseToItem bind:itemInfo={closeToLocations[7]}/>
            {/if}
        </div>
        <div class="close-section bottom-right">
            {#if closeToLocations[9]}
            <CloseToItem bind:itemInfo={closeToLocations[9]}/>
            {/if}
        </div>
    </div>
</div>

<style>
    #close-to-viewer{
        display: flex;
        align-items: center;
        justify-content: center;
        padding-bottom: 5em;
        width: 100%;
    }
    .close-section{
        width: 100%;
        min-width: 21rem;
        height: 4.4rem;
        border: 1px solid #dad8e0;
    }

    .top-left{
        border-radius: 10px 0 0 0;
    }
    .top-right{
        border-radius: 0 10px 0 0;
    }
    .bottom-right{
        border-radius: 0 0 10px 0;
    }
    .bottom-left{
        border-radius: 0 0 0 10px;
    }
</style>