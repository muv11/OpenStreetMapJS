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