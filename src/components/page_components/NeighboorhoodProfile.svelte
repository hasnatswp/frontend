

<script>
    import CircularIndicator from "../charts/CircularIndicator.svelte";
    import { limitCharacterInString } from '../../scripts/utils';

    export let neighborhoodScore;

    console.log('neighborhoodScore------------->', neighborhoodScore);

    let total = neighborhoodScore.neighborhood_score.pop();

    
    function getColor(value){

        var hue=(value).toString(10);
        return ["hsl(",hue,",100%,45%)"].join("");
    }

</script>

<div id="section-header-single">
    <p class="section-header-text">Nabolagsvurdering</p>
</div>

<div class="neighborhood-container mb-6">
    <div class="inner-score-container">
        {#each neighborhoodScore.neighborhood_score as score}
            <div class="score-row">
                <div class="flex flex-col justify-center items-center">
                    <CircularIndicator progress={score.score} indicatorColor={getColor(score.score)}/>
                    <p class="score-name">{limitCharacterInString(score.name, 12)}</p>

                    <!-- <div class="bar-container">
                        <div class="bar" style="background-color: {getColor(score.score)}; width: {score.score * 3}px;"></div>
                    </div>
                    <p style="color: {getColor(score.score)};">{score.score}%</p> -->
                </div>
                
            </div>
        {/each}
    </div>
</div>

<div id="section-header-single">
    <p class="section-header-text mt-8">Overall Assesment</p>
</div>
<div class="neighborhood-container">
    <div class="inner-score-container">
        <div class="score-row">
            <div class="flex flex-col justify-center items-center">
                <CircularIndicator progress={total.score} indicatorColor={getColor(total.score)}/>
                <p class="score-name">{limitCharacterInString(total.name, 14)}</p>

                <!-- <div class="bar-container">
                    <div class="bar" style="background-color: {getColor(total.score)}; width: {total.score * 3}px;"></div>
                </div> -->
                <!-- <p style="color: {getColor(total.score)};">{total.score}%</p> -->
            </div>
        </div>
    </div>
</div>


<style>
    #section-header-single{
        display: flex;
        align-items: center;
        width: 100%;
        margin: 1rem 1rem 0;
    }

    .section-header-text{
        @apply capitalize;
        font-size: 18pt;
        font-weight: bold;
        color: #3b3356;
        user-select: none;
		padding-left: .4rem;
		border-left: 6px solid #008A9A;
		line-height: 1.2;
		margin-block-start: 0rem; 
    	margin-block-end: 1.66rem; 

    }

    .neighborhood-container {
        @apply flex flex-col w-full;
        break-inside: avoid;
    }

    .inner-score-container {
        @apply grid grid-cols-4 gap-3 rounded-lg text-2xl font-medium;
    }

    .score-row {
        @apply flex w-full items-center justify-center p-3 border border-darkfox-aromatic-15 rounded-lg;
    }

    .score-name {
        @apply pt-2 text-sm text-darkfox-tc-medium;
    }

    .bar-container {
        @apply h-6 rounded-lg border border-darkfox-ash border-opacity-50 px-6;
        width: 300px;
    }

    .bar {
        @apply h-full rounded-lg;
    }



</style>