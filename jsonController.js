async function getContactMapFeatures() {
    const response = await fetch('http://' + ipUrl + '/json/map.json');
    return response.json().then((data) => {
        return data;
    });
}

async function addUserLayer() {
    let userGeoJson = await getContactMapFeatures();
    let vectorSource = new ol.source.Vector({
        features: new ol.format.GeoJSON().readFeatures(userGeoJson, {
            dataProjection: 'EPSG:4326',
            featureProjection: 'EPSG:3857'
        })
    });

    let userVectorLayer = new ol.layer.Vector({
        source: vectorSource
    });

    map.addLayer(userVectorLayer);
}
addUserLayer().then();