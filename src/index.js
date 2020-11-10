import { map, mapClick } from './map';
import fineImg from './fineImg';
import fineCity from './fineCity';

const form = document.getElementById('form');
const cit = document.getElementById('cit');
const country = document.getElementById('country');
const day = document.getElementById('day');
const month = document.getElementById('month');
const feelsLike = document.getElementById('feelsLike');
const tempMax = document.getElementById('tempMax');
const tempMin = document.getElementById('tempMin');
const description = document.getElementById('description');
const temp = document.getElementById('temp');
const svgIcon = document.getElementById('svgIcon');
const mapp = document.getElementById('map');
const metrics = document.getElementById('metrics');
const grades = document.getElementById('grades');

mapp.style.display = 'none';
let value = 'metric';

metrics.addEventListener('click', () => {
  if (metrics.textContent === 'Celsius') {
    metrics.textContent = 'Farenheit';
    value = 'metric';
    grades.textContent = '°C';
    return value;
  }
  metrics.textContent = 'Celsius';
  value = 'imperial';
  grades.textContent = '°F';
  return value;
});

svgIcon.addEventListener('click', (e) => {
  e.preventDefault();
  if (mapp.style.display === 'none') {
    mapp.style.display = 'block';
  } else {
    mapp.style.display = 'none';
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const word = document.getElementById('city').value;
  fineCity(word, value);
  form.reset();
});


const changeContent = (city, coun, tempe, feellike, tempmax, tempmin, desc, dia, mes) => {
  const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['December','January', 'February', 'March', 'May', 'June', 'July', 'August', 'September', 'October', 'November'];
  cit.textContent = city;
  country.textContent = coun;
  temp.textContent = tempe;
  feelsLike.textContent = feellike;
  tempMax.textContent = `${tempmax}°`;
  tempMin.textContent = `${tempmin}°`;
  description.textContent = desc;
  day.textContent = week[dia];
  month.textContent = months[mes];
  fineImg(desc);
};

mapClick(map);

const valu = value;

export { changeContent, valu };