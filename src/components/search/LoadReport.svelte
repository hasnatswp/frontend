
<script>

    import { fade, scale, fly } from 'svelte/transition';
    import { elasticInOut } from "svelte/easing";
    import Spinner from "./Spinner.svelte"

    let visibleIndex = 0;

    let message = ["Starter risikorapport generering..."];

    let messages = [
        {"text": "Ringer konsulenter...", "visible": true},
        {"text": "Sjekker støynivåer...", "visible": false},
        {"text": "Måler radon...", "visible": false},
        {"text": "Gjør grunnundersøkelser...", "visible": false},
        {"text": "Dobbeltsjekker alt...", "visible": false},
        {"text": "Lager rapport...", "visible": false},
        {"text": "Litt finpuss...", "visible": false},
    ]

    function loopMessages(){
        visibleIndex = messages.map(message => message.visible).indexOf(true);
        messages[visibleIndex].visible = false;
        messages[visibleIndex + 1].visible = true;
        message = [messages[visibleIndex + 1]["text"]];

    }

    let t = 1500

    var i = setInterval(loopMessages, t);
    setTimeout(function( ) { clearInterval( i ); }, t*5);

</script>

<div class="loading-container">

    {#each [message] as message (message)}
        <div in:fade="{{duration: 1000}}">{message}</div>
    {/each}

    <div class="flex w-full h-44 justify-center items-center">
        <Spinner></Spinner>
    </div>




</div>


<style>

    .loading-container {
        @apply flex flex-col w-full h-full justify-center items-center;
        width: 100vw;
        height: 100vh;

    }

</style>