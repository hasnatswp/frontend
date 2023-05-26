<script>
    import { onMount } from 'svelte';
    import Chart from 'chart.js/auto';

    export let graphLabels = [];
    export let graphData = [];

    let ctx;

    onMount(()=>{
        ctx = document.querySelector('.bar-chart-canvas').getContext('2d');
        new Chart(ctx, {
        type: 'bar',
        data: {
            labels: graphLabels,
            datasets: [{
                label: '',
                data: graphData,
                backgroundColor: ['#10a3c2'],
                borderColor: ['#10a3c2'],
                borderWidth: 1,
                borderRadius: 10
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        borderColor: 'rgba(0,0,0,0)',
                        drawTicks: false
                    },
                    ticks:{
                        font: {
                            family: 'Lexend, sans-serif',
                            size: 14
                        }
                    }
                },
                x: {
                    grid: {
                        display: false
                    },
                    ticks:{
                        font: {
                            family: 'Lexend, sans-serif',
                            size: 14
                        }
                    }
                }
            },
            plugins:{
                legend:{
                    labels:{
                        boxWidth: 0
                    }
                }
            }
        }
        });
    });
</script>

<div id="bar-chart">
    <canvas class="bar-chart-canvas"></canvas>
</div>

<style>
    #bar-chart{
        width: 100%;
        margin: 0 auto 2rem auto;
        border: 1px solid #f0eff2;
        border-radius: 10px;
        padding-inline: 1.4em;
    }

    .bar-chart-canvas{
        background-color: white;
    }
</style>