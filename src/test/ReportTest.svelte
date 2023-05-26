<div>
    <section class="chapter">
        <div>
            <h2>Lorem ipsum dolor sit amet, consectetur</h2> 
        </div>
    </section>
    <section class="chapter">
        <div>
            <h2>Lorem ipsum dolor sit amet, consectetur</h2> 
        </div>
    </section>
    <div class="footer">Page: <span class="pagenum"></span></div>
    <p>lorem ipsum ...</p>
    <p>lorem ipsum ...</p>
</div>

<style>
    /* Use A4 paper in landscape orientation */
    @page {
        size: A4 portrait;
        margin: 3in 4in;

        @top-right {
            content: "My title";
        }

        @bottom-left {
            content: "Page " counter(page) " of " counter(pages);
        }
    }

    .chapter {
        break-before: right;
    }
    h2 {
        break-before: page;
    }
    p { page-break-after: always; }
    .footer { position: fixed; bottom: 0px; }
    .pagenum:before { content: counter(page); }

</style>