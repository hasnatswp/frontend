
import { writable } from "svelte/store";


function getRiskReport(){

    const { subscribe, set, update } = writable(false);

    return {
        subscribe,
        set: (val) => {
            set(val);
        },

        setPropertyId: (property_id) => {
            set(property_id);
            return;
        },

        getBaseUrl: () => {
            return "https://riskreportmicroservice.propcloud.no"
        },

        getRiskReport: async (property_id) => {
            layersLoaded.set(false);
            layersTooLarge.set(false);

            let url = `https://riskreportmicroservice.propcloud.no//get_total_area/${property_id}`

            let data;
        
            try {
                const response = await fetch(url);
                data = await response.json();
                console.log('get area data----------->', data);
                if(data.success){
                    const url = "https://riskreportmicroservice.propcloud.no";
                    const propertyId = property_id;
                    if (!propertyId) {
                        set(undefined);
                        return;
                    }

                    const res = await Promise.all([
                        // fetch(url + '/get_property/' + propertyId),
                        fetch(url + '/get_map/' + propertyId),
                        fetch(url + '/get_neighborhood_score/' + propertyId),
                        fetch(url + "/get_valuation_estimate/" + propertyId),
                        fetch(url + "/get_rental_estimate/" + propertyId),
                        fetch(url + "/get_valuation_data/" + propertyId),
                    ]);

                    // BAD code, but it works. Will refactor later.
                    const [ mapData, neighborhoodScoreData, valuation_estimateData, rental_estimateData, valuationData] = await Promise.all([
                        res[0].json(),
                        res[1].json(),
                        res[2].json(),
                        res[3].json(),
                        res[4].json(),
                        // res[5].json(),
                    ]);

                    const data = {
                        // property: propData,
                        map: mapData,
                        neighborhood_score: neighborhoodScoreData,
                        valuation_estimate: valuation_estimateData,
                        rental_estimate: rental_estimateData,
                        valuation_data: valuationData
                    };

                    const layerNames = await fetch(url + '/layer_names');
                    const layerNamesData = await layerNames.json();
                    console.log('layes names data------------>', layerNamesData);

                    const layerResponse = await Promise.all(
                        layerNamesData.layers.map(async (layer) => {
                            return fetch(
                                `${url}/get_single_identified_map_layers/${propertyId}/${layer}`
                            );
                        })
                    );
                    // console.log({ layerResponse })
                    const identified_layersData = await Promise.all(
                        layerResponse.map(async (layer) => {
                            const layerRes = await layer.json();
                            
                            return layerRes;
                        })
                    );
                    console.log('identified layers data----------->', identified_layersData);

                    const layers = identified_layersData.map((i => {
                        if(i.success && i.identified_layers.length>0) {
                            return i.identified_layers;
                        } {
                            return []
                        }
                    }));
                    
                    
                    const identified_layers = layers.filter(i => i.length).map(i => i[0])

                    console.log('identified layers----------->', identified_layers);


                    const riskResponse = await fetch(
                        `${url}/get_risk_assessment/${propertyId}`,
                        {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                                layers: identified_layers,
                            }),
                        }
                    );
                    
                    const riskAssessment = await riskResponse.json();

                    const reportData = {
                        ...data,
                        identified_layers: identified_layers,
                        riskAssessment: riskAssessment,
                    };
                    console.log('report data-------->', reportData);
                    if(Object.keys(reportData).length > 0){
                        layersLoaded.set(true);
                    }
                    set(reportData);
                }else{
                    layersTooLarge.set(true);
                }
            } catch (error){
                data = "error";
                console.log(error);
            }


            
        },

        getReport: async (property_id) => {
            
            let url = `https://riskreportmicroservice.propcloud.no//get_risk_report/${property_id}`

            let data;
        
            try {
                const response = await fetch(url);
                data = await response.json();
            } catch (error){
                data = "error";
                console.log(error);
            }
        
            set(data);
            return
        }
	};
}

export function groupByKey(array, key) {
    return array.reduce((hash, obj) => {
        if(obj[key] === undefined) return hash; 
        return Object.assign(hash, { [obj[key]]:( hash[obj[key]] || [] ).concat(obj)})
    }, {})
}


export let riskReport = getRiskReport();
export let layersTooLarge = writable(false);
export let layersLoaded = writable(false);
export let propertyIdNma = writable('');
export let srcInfoBox = writable('');