<script>
    export let companyLogo;
    export let companyName;

    export let propertyID;
    export let propertyAddress;
</script>
<div class="w-full h-6 bg-[#2744dc]"></div>
<div class="page-header">
    <div class="header-info">
        <div class="header-logo">
            <img class="logo-image" src={companyLogo} alt="company logo">
            <h2 class="company-text">{companyName}</h2>
        </div>
    
        <div class="property-info">
            <p>{propertyID}</p>
            <p>|</p>
            <p>{propertyAddress}</p>
        </div>
    </div>

    <hr class="header-hr">
</div>

<style>
    .page-header{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: 4rem;
        z-index: 100;
    }

    .header-info{
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-between;
        padding-top: 1rem;
        padding: 1rem 2rem 0 2rem;
    }

    .header-logo{
        width: 100%;
        display: flex;
        align-items: center;
        gap: 1rem;
        user-select: none;
    }

    .logo-image{
        width: 2.6rem;
    }

    .company-text{
        font-size: 12pt;
        color: #2328c2;
        font-weight: 600;
    }

    .property-info{
        display: flex;
        align-items: center;
        gap: 1rem;
        font-size: 10pt;
        color: #77718a;
        justify-content: flex-end;
        width: 100%;
    }

    .header-hr{
        outline: none;
        border: 1px solid #d4d2da;
        width: 100%;
    }
</style>