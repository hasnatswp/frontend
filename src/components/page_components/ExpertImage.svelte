
<script>
    export let icon;
    import { onMount } from 'svelte';

    onMount(() => {
		setTimeout(() => {
            icon = icon.replace("https://riskreport-assets.s3.eu-north-1.amazonaws.com/", "https://d1mxvo84fosfrf.cloudfront.net/")
		}, 1000);
	});

</script>



<img class="expert-icon" src={icon} alt="company logo">


<style>
    .expert-icon {
        @apply h-8;
    }
    @media print{
        .expert-icon{
            page-break-inside: avoid !important;
        }
    }
</style>