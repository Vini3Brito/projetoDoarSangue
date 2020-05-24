L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 20,
    minZoom: 4,
    id: 'lucasbassi/ck9vq4yzz01rq1imp48eqymsd',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibHVjYXNiYXNzaSIsImEiOiJjazl2bzkxcXgwMHVmM2tyenIxZGc0aGNiIn0.lD4f_HJLoF1URO0V3PGu_Q'
}).addTo(mymap);
