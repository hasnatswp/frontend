<script>
    export let itemInfo = {name: "", icon: "", distance: ""};
</script>

<div class="close-to-item">
    <div class="name-holder">
        <img class="img-icon" src={itemInfo.icon} alt="Location Icon">
        <p class="item-name">{itemInfo.name}</p>
    </div>
    <p class="item-distance">{itemInfo.distance}</p>
</div>

<style>
    .close-to-item{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-top: 0.8em;
        padding-top: 0.8em;
        padding-inline: 1em;
        user-select: none;
    }

    .name-holder{
        display: flex;
        gap: 1rem;
        align-items: center;
        color: #0a0130;
    }

    .img-icon{
        width: 2.6rem;
    }

    .item-distance{
        color: #726a86;
    }
</style>