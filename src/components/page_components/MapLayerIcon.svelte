<script>
	import { onMount } from 'svelte';

	// export let iconTitle;
	export let iconSrc;
    /**
     * @type {HTMLImageElement}
     */
    let img;


	onMount(() => {

		setTimeout(() => {
            iconSrc = iconSrc.replace("https://riskreport-assets.s3.eu-north-1.amazonaws.com/", "https://d1mxvo84fosfrf.cloudfront.net/")
		}, 1000);
	});

	export let imgWidth;
	export let marginWidth;

</script>

<div class="map-layer-icon" style="width: {imgWidth}%; margin: {.5 * marginWidth}% {marginWidth}%">
	<img class="map-icon" src={iconSrc} alt="layer-icon" bind:this={img}/>
</div>

<style>
	.map-layer-icon {
		@apply flex items-center justify-center bg-[#f6f8ff] rounded-sm;
		backdrop-filter: saturate(50%) blur(20px);
	}

	.map-icon {
		width: 90%;
		filter: saturate(95%) hue-rotate(300deg) brightness(1);
	}

	.icon-title {
		@apply capitalize;
		font-size: 12pt;
		color: #383055;
	}

	@media print{
		.map-layer-icon{
			/* width: 15.4%; */
			display: inline-block !important;
			/* margin: 4px; */
			position: relative;
		}
		.map-icon{
			margin: 0 auto;
			page-break-inside: avoid !important;;
		}
	}
</style>
