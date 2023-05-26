<script>
    import { onMount } from 'svelte'

    export let currentRiskLevel;

    const riskColors = [{lowBright: "#17fd17", lowDark: "#99ff99"}, {mediumBright: "#fdb717", mediumDark: "#fad681"}, {highBright: "#fd1717", highDark: "#fa6c6c"}]

    onMount(()=>{
        const lvlOne = document.querySelector('.level-one');
        const lvlTwo = document.querySelector('.level-two');
        const lvlThree = document.querySelector('.level-three');

        if(currentRiskLevel == "low"){
            lvlOne.style.backgroundColor = riskColors[0].lowBright;
            lvlTwo.style.backgroundColor = riskColors[0].lowDark;
            lvlThree.style.backgroundColor = riskColors[0].lowDark;
        }else if(currentRiskLevel == "medium"){
            lvlOne.style.backgroundColor = riskColors[1].mediumBright;
            lvlTwo.style.backgroundColor = riskColors[1].mediumBright;
            lvlThree.style.backgroundColor = riskColors[1].mediumDark;
        }else if(currentRiskLevel == "high"){
            lvlOne.style.backgroundColor = riskColors[2].highBright;
            lvlTwo.style.backgroundColor = riskColors[2].highBright;
            lvlThree.style.backgroundColor = riskColors[2].highBright;
        }
    });
</script>

<div id="risk-level">
    <div class="level level-one">

    </div>
    <div class="level level-two">

    </div>
    <div class="level level-three">

    </div>
</div>

<style>
    #risk-level{
        display: flex;
        gap: 0.4rem;
    }

    .level{
        width: 1.4rem;
        height: 0.7rem;
        border-radius: 100vh;
    }
</style>