let source = new ol.source.Vector();
let vectorLayer = new ol.layer.Vector({
    source: source
});

const noneControl = new noneDrawControl;
const pointControl = new pointDrawControl;
const lineControl = new lineStringDrawControl;
const polygonControl = new polygonDrawControl;
const circleControl = new circleDrawControl;

mapControls = [
    new ol.control.ScaleLine(),
    new ol.control.Zoom(),
    new ol.control.FullScreen(),
    new ol.control.Rotate(),
    new ol.control.ZoomSlider(),
    new ol.control.ZoomToExtent(),

    noneControl,
    pointControl,
    lineControl,
    polygonControl,
    circleControl
];

let map = new ol.Map({
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM({
                url: 'http://' + ipUrl + '/osm/{z}/{x}/{y}.png'
            })
        }), vectorLayer
    ],
    target: 'map',
    controls: mapControls,
    view: new ol.View({
        center: ol.proj.fromLonLat([60.6122, 56.8519]),
        zoom: 12
    })
});

let draw;
function addInteraction(element) {
    let value = element.value;
    if (value !== 'None') {
        draw = new ol.interaction.Draw({
            source: source,
            type: value
        });
        map.addInteraction(draw);
    }
}

function handleBtnClick() {
    let element = this;
    map.removeInteraction(draw);
    addInteraction(element);
}

document.getElementById("None").addEventListener('click', handleBtnClick);
document.getElementById("Point").addEventListener('click', handleBtnClick);
document.getElementById("Polygon").addEventListener('click', handleBtnClick);
document.getElementById("LineString").addEventListener('click', handleBtnClick);
document.getElementById("Circle").addEventListener('click', handleBtnClick);

addInteraction(document.getElementById("None"));