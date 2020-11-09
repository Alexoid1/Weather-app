/* eslint-disable no-undef */
import { valu } from './index';
import fineCityCoords from './fineCoords';

mapboxgl.accessToken = 'pk.eyJ1IjoiYWxleG9pZDEiLCJhIjoiY2toYWNtdHFuMDJrczJ1cGQ1cDhzeDlydSJ9.9RebTFQYh0sZKtDuBgL98A';
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
  center: [-74.5, 40], // starting position [lng, lat]
  zoom: 9, // starting zoom
});

const mapClick = (map) => {
  map.on('click', (e) => {
    fineCityCoords(e.lngLat.lng, e.lngLat.lat, valu);
  });
};


export { map, mapClick };