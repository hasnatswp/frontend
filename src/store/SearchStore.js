
import { writable } from 'svelte/store';


const api = import.meta.env.VITE_API_URL;
const searchApi = import.meta.env.VITE_SEARCH_API_URL;

let bearerToken = import.meta.env.VITE_PROPERTY_DETAILS_BEARER_TOKEN;

let config={};
config["api-key"] = bearerToken;


function handlePropertySearch() {
    const { subscribe, set, update } = writable("");

    return {
        subscribe,
        set: (val) => {
            set(val);
        },

        doSearch: async (searchval) => {
            
            if (searchval == "") {
                set([])
                return
            }

            set('loading')

            let propResponse  = await fetch(searchApi+'/prop-details/info/search/address?search_term='+searchval, {
                method: 'GET',
                headers: config
            });
            let propData = await propResponse.json();

            let housingResponse = await fetch(searchApi+'/prop-details/info/search/housing?search_term='+searchval, {
                method: 'GET',
                headers: config
            });
            let housingData = await housingResponse.json();

            console.log('property search results------------->', propData);
            console.log('housing search results------------->', housingData);

            let data = [...propData, ...housingData];

            console.log('data------------->', data);
            
            set(data);
            return
        }
	};
}

export let propertySearch = handlePropertySearch();

export function redirectHandler(id){
	if(id){
        let path="";
        let pathArray = id.split('-');
        
        let kommune_nr = pathArray[0];
        let gnr = pathArray[1];
        let bnr = pathArray[2];
        let festenr = pathArray[3];
        let seksjonsnr = pathArray[4];

        if(festenr || seksjonsnr){
            return path = `/risk-report/${kommune_nr}/${gnr}/${bnr}/${festenr}/${seksjonsnr}`;
        }else{
            return path = `/risk-report/${kommune_nr}/${gnr}/${bnr}`;
        }
    }else{
        console.warn('invalid url!')
    }
}

export const propertyId = writable('');
export const propertyName = writable('');
