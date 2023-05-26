<script>
    export let headerText;
</script>

<div id="section-header-small">
    <div class="accent-block"></div>
    <p class="section-header-text">{headerText}</p>
</div>

<style>
    #section-header-small{
        display: flex;
        align-items: center;
        gap: 0.6rem;
        width: 100%;
        margin-block: 0.5em;
    }

    .section-header-text{
        font-size: 10pt;
        font-weight: bold;
        color: #3b3356;
        user-select: none;
    }

    .accent-block{
        width: 0.4rem;
        height: 1rem;
        background-color: #008A9A;
    }
</style>