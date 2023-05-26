<script>

    let strokeWidth = 10;
    let radius = 50;
    let strokeDash = 283;
    export let color = 'rgba(101, 101, 101, 0.346)'
    export let size = 16;
    
    </script>
    
    <svg class="h-{size} w-{size}" viewBox="0 0 100 100">
        <circle 
            style="
                stroke-width:{strokeWidth};
                stroke-dasharray: {strokeDash};
                stroke: {color};
            " 
            cx="{radius}" 
            cy="{radius}" 
            r="{radius - (strokeWidth/2)}"
            class="animate-spin "
        />
    </svg>
    
    <style>
    
    circle {
        fill: transparent;
        stroke-linecap: round;
        stroke-dashoffset: 60;
        transform-origin: 50% 50%;
    }
    
    
    </style>
    