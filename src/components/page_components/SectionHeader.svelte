<script>
    import { removeUnderscore } from '../../scripts/utils';
    export let headerText;
</script>


{#if headerText}
    <h2 class="no-break top">{headerText.replaceAll('_', ' ')}</h2>
{/if}