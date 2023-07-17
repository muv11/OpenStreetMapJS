$(document).ready(function(){
    $('.export-json').click(function() {
        let json = new ol.format.GeoJSON().writeFeatures(vectorLayer.getSource().getFeatures(), {
            dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'
        });
        function download(content, fileName, contentType) {
            let a = document.createElement("a");
            let file = new Blob([content], {type: contentType});
            a.href = URL.createObjectURL(file);
            a.download = fileName;
            a.click();
        }
        download(json, 'layer.json', 'text/plain');
    });

    $('.import-json').click(function() {
        overlay();
    });

    $('body').click(function(event) {
        if (event.target.id !== '#overlay') {
            hideOverlay();
        }
    });

    $('.save').click(function (event) {
        let json = saveAllUserLayers();
        postUpdatedJson(json).then();
    });
});

function overlay() {
    element = document.getElementById("overlay");
    element.style.visibility = (element.style.visibility === "visible") ? "hidden" : "visible";
}

function showOverlay() {
    element = document.getElementById("overlay");
    element.style.visibility = "visible";
}

function hideOverlay() {
    element = document.getElementById("overlay");
    element.style.visibility = "hidden";
}

function saveAllUserLayers() {
    let json = new ol.format.GeoJSON().writeFeatures(vectorLayer.getSource().getFeatures(), {
        dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'
    });
    return json;
}

async function postUpdatedJson(file) {
    let request = new XMLHttpRequest();
    request.open("POST", postUrl, true);
    request.send(file);
}