<script>
	import Router, {location} from 'svelte-spa-router';
	import routes from './routes';

    const { fetch: originalFetch } = window;

    let currentPos = 0;
    let bearerToken = import.meta.env.VITE_BEARER_TOKEN;

    window.addEventListener('beforeprint', () => {
        const btnElement = document.querySelector("#preview-controls");
        btnElement.style.display = "none";
        currentPos = document.documentElement.scrollTop || document.body.scrollTop
        window.scrollTo(0, 0);
    })

    window.addEventListener('afterprint', () => {
        window.scrollTo(0, currentPos);
        const btnElement = document.querySelector("#preview-controls");
        btnElement.style.display = "flex";
    })

    window.fetch = async (...args) => {
        let [resource, config ] = args;
        config = config || {}
        config.headers = config.headers || {}
        
        if($location.split('/')[1] === "risk-report") {
            config["headers"]["Api-Key"] = "Bearer " + bearerToken;
        }
        

        // if(import.meta.env.DEV) {
        //     if(resource.includes("https://riskreportmicroservice.propcloud.no")) {
        //         resource = resource.replace("https://riskreportmicroservice.propcloud.no", "http://localhost:7000");
        //     }
        // }

        const response = await originalFetch(resource, config);
        
        return response;
    };

</script>

<Router {routes} />  

<style>
	:global(body) {
        width: 100%;
        height: 100%;
		background-color: #f4f7ff;
		font-family: 'Open Sans', sans-serif;
	}

    @media print {
        :global(body) {
            background-color: #fff;
        }
    }
</style>

