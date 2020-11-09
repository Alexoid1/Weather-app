import { fineCityCoords } from './index'

    mapboxgl.accessToken = 'pk.eyJ1IjoiYWxleG9pZDEiLCJhIjoiY2toYWNtdHFuMDJrczJ1cGQ1cDhzeDlydSJ9.9RebTFQYh0sZKtDuBgL98A';
    var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
    center: [-74.5, 40], // starting position [lng, lat]
    zoom: 9 // starting zoom
});

const mapClick = (map) => {
    map.on('click', function(e) {
    
        fineCityCoords(e.lngLat.lng,e.lngLat.lat);
   });

}

    


export { map, mapClick }