
    function getBboxFromSatelliteUrl(url){

        const urlComponents = url.split("/");

        const bbox = urlComponents[8].split(",");
        let newBbox = [];

        bbox.forEach(element => {
            element = element.replace("%20", "");
            element = element.replace("[", "");
            element = element.replace("]", "");
            element = parseFloat(element);
            newBbox.push(element);
        });

        return newBbox;
    }

    function getWidthAndHeightFromSatelliteUrl(url){

        let urlComponents = url.split("/");

        const widthAndHeightSegment = urlComponents[9].split("?")[0].split("x");

        const width = parseInt(widthAndHeightSegment[0]);
        const height = parseInt(widthAndHeightSegment[1]);

        return [width, height];

    }

    function adjustCoordinates(min, max, adjustmentFactor){

        const currentDiff = max - min;
        const targetDiff = currentDiff * adjustmentFactor;
        const halfTargetDiff = targetDiff / 2;

        min = min - halfTargetDiff;
        max = max + halfTargetDiff;

        return [min, max];
    }




function getBboxFromWMSUrl(url){

    let splitUrl = url.split("&");
    let bbox = splitUrl[splitUrl.length-1].split("=")[1].split("%2C");
    let newBbox = [];

    bbox.forEach(element => {
        newBbox.push(parseFloat(element));
    });

    return newBbox;
}

function getWidthAndHeightFromWMSUrl(url){

    let splitUrl = url.split("&");

    let width = parseInt(splitUrl[splitUrl.length-3].split("=")[1]);
    let height = parseInt(splitUrl[splitUrl.length-2].split("=")[1])

    return [width, height];

}


export function getNewSatelliteUrl(url, targetHeight){


    const bbox = getBboxFromSatelliteUrl(url);

    const widthAndHeight = getWidthAndHeightFromSatelliteUrl(url);

    const width = widthAndHeight[0];
    const height = widthAndHeight[1];

    const targetWidth = 1200;

    let minX = bbox[0];
    let maxX = bbox[2];

    let minY = bbox[1];
    let maxY = bbox[3];

    const currentRatio = width / height;
    const targetRatio = parseInt(targetWidth / targetHeight);
    const adjustmentFactor = targetRatio / currentRatio;

    const adjustedX = adjustCoordinates(minX, maxX, adjustmentFactor);

    minX = adjustedX[0];
    maxX = adjustedX[1];

    let newUrl = `https://api.mapbox.com/styles/v1/mapbox/satellite-v9/static/%5b${minX},%20${minY},%20${maxX},%20${maxY}%5d/${targetWidth}x${targetHeight}?access_token=pk.eyJ1IjoiaGFha29ucHJvcGNsb3VkIiwiYSI6ImNsMWJ1NWI5NDAxYjAzZm12azB6cjhraHoifQ.3cXwuVNs-gWl8HkBnV4T_w`;

    return newUrl;        
}


export function getNewWmsUrl(url, targetHeight){

    let urlBase = url.split("&WIDTH")[0];

    const bbox = getBboxFromWMSUrl(url);
    const widthAndHeight = getWidthAndHeightFromWMSUrl(url);

    const width = widthAndHeight[0];
    const height = widthAndHeight[1];

    const targetWidth = 1200;

    let minX = bbox[0];
    let maxX = bbox[2];

    let minY = bbox[1];
    let maxY = bbox[3];

    const currentRatio = width / height;
    const targetRatio = parseInt(targetWidth / targetHeight);

    if(currentRatio < targetRatio){
        const adjustmentFactor = targetRatio / currentRatio - 1;
        const adjustedX = adjustCoordinates(minX, maxX, adjustmentFactor);
    
        minX = adjustedX[0];
        maxX = adjustedX[1];
    }
    if(currentRatio > targetRatio){
        const adjustmentFactor = targetRatio / currentRatio - 1;
        const adjustedY = adjustCoordinates(minY, maxY, adjustmentFactor);
    
        minY = adjustedY[0];
        maxY = adjustedY[1];
    }  


    let newUrl = `${urlBase}&WIDTH=${targetWidth}&HEIGHT=${targetHeight}&BBOX=${minX}%2C${minY}%2C${maxX}%2C${maxY}`;

    return newUrl;
}