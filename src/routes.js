import Search from "./components/search/Search.svelte";
import RiskReport from "./risk_report/risk_report.svelte";


export default {
	'/': Search,
	'/risk-report/:knr?/:gnr?/:bnr?/:lease?/:section?': RiskReport,
}