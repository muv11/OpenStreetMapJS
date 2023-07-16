noneDrawControl = function(opt_options) {
    const button = document.createElement('button');
    button.innerHTML = '<img src="http://' + ipUrl + '/images/close.png" alt="None" width="16" height="16">';
    const element = document.createElement('div');
    element.className = 'none-draw ol-unselectable ol-control';
    element.id = 'None';
    element.value = 'None';
    element.appendChild(button);
    ol.control.Control.call(this, {
        element: element
    });
}
ol.inherits(noneDrawControl, ol.control.Control);

pointDrawControl = function(opt_options) {
    const button = document.createElement('button');
    button.innerHTML = '<img src="http://' + ipUrl + '/images/map-point.png" alt="Point" width="16" height="16">';
    const element = document.createElement('div');
    element.className = 'point-draw ol-unselectable ol-control';
    element.id = 'Point';
    element.value = 'Point';
    element.appendChild(button);
    ol.control.Control.call(this, {
        element: element
    });
}
ol.inherits(pointDrawControl, ol.control.Control);

lineStringDrawControl = function(opt_options) {
    const button = document.createElement('button');
    button.innerHTML = '<img src="http://' + ipUrl + '/images/vector.png" alt="LineString" width="16" height="16">';
    const element = document.createElement('div');
    element.className = 'line-string-draw ol-unselectable ol-control';
    element.id = 'LineString';
    element.value = 'LineString';
    element.appendChild(button);
    ol.control.Control.call(this, {
        element: element
    });
}
ol.inherits(lineStringDrawControl, ol.control.Control);

polygonDrawControl = function(opt_options) {
    const button = document.createElement('button');
    button.innerHTML = '<img src="http://' + ipUrl + '/images/polygon.png" alt="Polygon" width="16" height="16">';
    const element = document.createElement('div');
    element.className = 'polygon-draw ol-unselectable ol-control';
    element.id = 'Polygon';
    element.value = 'Polygon';
    element.appendChild(button);
    ol.control.Control.call(this, {
        element: element
    });
}
ol.inherits(polygonDrawControl, ol.control.Control);

circleDrawControl = function(opt_options) {
    const button = document.createElement('button');
    button.innerHTML = '<img src="http://' + ipUrl + '/images/circle.png" alt="Circle" width="16" height="16">';
    const element = document.createElement('div');
    element.className = 'circle-draw ol-unselectable ol-control';
    element.id = 'Circle';
    element.value = 'Circle';
    element.appendChild(button);
    ol.control.Control.call(this, {
        element: element
    });
}
ol.inherits(circleDrawControl, ol.control.Control);

exportJsonControl = function(opt_options) {
    const button = document.createElement('button');
    button.innerHTML = '<img src="http://' + ipUrl + '/images/download.png" alt="Export JSON" width="16" height="16">';
    const element = document.createElement('div');
    element.id = 'exportJsonBtn';
    element.className = 'export-json ol-unselectable ol-control';
    element.appendChild(button);
    ol.control.Control.call(this, {
        element: element
    });
}
ol.inherits(exportJsonControl, ol.control.Control);

importJsonControl = function(opt_options) {
    const button = document.createElement('button');
    button.innerHTML = '<img src="http://' + ipUrl + '/images/upload.png" alt="Import JSON" width="16" height="16">';
    const element = document.createElement('div');
    element.id = 'importJsonBtn';
    element.className = 'import-json ol-unselectable ol-control';
    element.appendChild(button);
    ol.control.Control.call(this, {
        element: element
    });
}
ol.inherits(importJsonControl, ol.control.Control);

saveDrawControl = function(opt_options) {
    const button = document.createElement('button');
    button.innerHTML = '<img src="http://' + ipUrl + '/images/save.png" alt="Save" width="16" height="16">';
    const element = document.createElement('div');
    element.id = 'saveBtn';
    element.className = 'save ol-unselectable ol-control';
    element.appendChild(button);
    ol.control.Control.call(this, {
        element: element
    });
}
ol.inherits(saveDrawControl, ol.control.Control);