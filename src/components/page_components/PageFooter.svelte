<script>
    export let currentDate;
    export let pageNumber;
    export let companyURL;
</script>

<div class="page-footer">
    <hr class="footer-hr">
    <div class="footer-content">
        <!-- <p>{currentDate}</p> -->
        <!-- <p class="text-center">Slide {pageNumber}</p> -->
        <a class="text-darkfox-primary text-right" href={companyURL} target="_blank"><p>www.propcloud.no</p></a>
    </div>
</div>

<style>
    .page-footer{
        @apply absolute bottom-0 w-full flex flex-col items-center justify-between py-4;
    }
    .footer-content{
        @apply w-full flex mt-3 items-center justify-center text-[#77718a] text-xs lg:text-sm select-none;
    }

    .footer-hr{
        outline: none;
        border: 1px solid #d4d2da;
        width: 100%;
    }
    @media print{
        .page-footer{
            @apply block fixed bottom-0 flex flex-col items-center py-4;
            width: 100% !important;
            background-color: #fff;

        }
    }
</style>