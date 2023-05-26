<script>
    import { link } from 'svelte-spa-router';
    import IconTooLarge from '../components/icons/IconTooLarge.svelte';
</script>

<div class="w-full h-[100vh] flex flex-col items-center justify-center">
    <IconTooLarge/>
    <h2 class="text-lg font-medium text-darkfox-accent py-4">
        Denne eiendommen er for stor å laste inn. Ta kontakt med oss så følger vi opp med en analyse på akkurat denne.
    </h2>
    <a class="link" href use:link={'/'}>Go back to search</a>
</div>

<style>
    .link{
        @apply underline cursor-pointer text-lg text-darkfox-primary font-normal;
    }
</style>