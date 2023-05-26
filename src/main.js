import "./app.css";
import App from "./App.svelte";

// import { init as initApm } from '@elastic/apm-rum'

// const serviceName = import.meta.env.VITE_SERVICE_NAME;
// const serviceUrl = import.meta.env.VITE_SERVICE_URL;

// const apm = initApm({

//   // Set required service name (allowed characters: a-z, A-Z, 0-9, -, _, and space)
//   serviceName: serviceName,

//   // Set custom APM Server URL (default: http://localhost:8200)
//   serverUrl: serviceUrl,

//   // Set service version (required for sourcemap feature)
//   serviceVersion: ''
// })

const app = new App({
  target: document.getElementById("app"),

});

export default app;
