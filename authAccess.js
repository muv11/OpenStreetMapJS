async function getCurrentUserData() {
    const response = await fetch('http://' + userDataUrl + '/json/map.json');
    return response.json().then((data) => {
        return data;
    });
}

function setAccess() {
    if (getCurrentUserData().auth) {
        map.addControl(expJsonControl);
        map.addControl(impJsonControl);
        map.addControl(noneControl);
        map.addControl(pointControl);
        map.addControl(lineControl);
        map.addControl(polygonControl);
        map.addControl(circleControl);
    } else {
        map.removeControl(expJsonControl);
        map.removeControl(impJsonControl);
        map.removeControl(noneControl);
        map.removeControl(pointControl);
        map.removeControl(lineControl);
        map.removeControl(polygonControl);
        map.removeControl(circleControl);
    }
}

setAccess();