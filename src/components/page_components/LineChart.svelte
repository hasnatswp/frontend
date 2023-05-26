<script>
    import { onMount } from 'svelte';
    import Chart from 'chart.js/auto';

    export let graphLabels = [];
    export let graphData = [];

    let ctx;

    onMount(()=>{
        ctx = document.querySelector('.line-chart-canvas').getContext('2d');
        new Chart(ctx, {
        type: 'line',
        data: {
            labels: graphLabels,
            datasets: [{
                label: '',
                data: graphData,
                backgroundColor: ['#967cef'],
                borderColor: ['#967cef'],
                borderWidth: 2,
                borderRadius: 10,
                pointBackgroundColor: 'rgba(0,0,0,0)',
                pointBorderColor: 'rgba(0,0,0,0)',
            }]
        },
        options: {
            tension: 0.2,
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
                        },
                        callback: function(value) {
                            if(parseInt(value) >= 1000){
                                return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
                            } else {
                                return value;
                            }
                        }
                    },
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

<div id="line-chart">
    <canvas class="line-chart-canvas"></canvas>
</div>

<style>
    #line-chart{
        width: 100%;
        margin-bottom: 1rem;
        margin-inline: auto;
        border: 1px solid #f0eff2;
        border-radius: 10px;
        padding-block: 1em;
        padding-inline: 1.4em;
    }

    .line-chart-canvas{
        width: 100%;
        height: 10rem;
        background-color: white;
    }
</style>