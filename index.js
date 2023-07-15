let source = new ol.source.Vector();
let vectorLayer = new ol.layer.Vector({
    source: source
});

mapControls = [
    new ol.control.ScaleLine(),
    new ol.control.Zoom(),
    new ol.control.FullScreen(),
    new ol.control.Rotate(),
    new ol.control.ZoomSlider(),
    new ol.control.ZoomToExtent()
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

