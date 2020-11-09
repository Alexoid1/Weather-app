import { map, mapClick } from './map';
import fineImg from './fineImg';

const form = document.getElementById('form');
const cit = document.getElementById('cit');
const country = document.getElementById('country');
const day = document.getElementById('day');
const month = document.getElementById('month');
const currentTime = document.getElementById('timerr');
const feelsLike = document.getElementById('feelsLike');
const tempMax = document.getElementById('tempMax');
const tempMin = document.getElementById('tempMin');
const description =  document.getElementById('description');
const icon = document.getElementById('icon');
const temp = document.getElementById('temp');

const svgIcon = document.getElementById('svgIcon');
const mapp = document.getElementById('map');


svgIcon.addEventListener('click', ()=>{
    if(mapp.style.display==='none'){
        mapp.style.display = 'block';
    }else {
        mapp.style.display = 'none';
    }
    
})




const tiempo = new Date();
const dia = tiempo.getDay();
const mes = tiempo.getMonth();

let cities=[];
form.addEventListener('submit', (e)=>{
    e.preventDefault();

    const word=document.getElementById('city').value
    fineCity(word);
    form.reset();
    
    
})

function fineCityCoords(log,lat){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&units=metric&appid=5b117267147ee27ab762fca637060b5f`,{mode: "cors"})
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        
        changeContent(data.name, data.sys.country, data.main.temp, data.main.feels_like, data.main.temp_max, data.main.temp_min, data.weather[0].description, dia, mes)
    })
    .catch(function (error){
        console.log(error)
    })
    // return notes.filter(function(x){//filtro en el array de objetos notas
    //     const regex= new RegExp(city,'gi')
    //     return x.search.match(regex)||x.title.match(regex)||x.type.match(regex)//city y state son propiedades dentro del objeto cities como ya esta creado tiene sus propiedades
    
    // });
    
    
}  


function fineCity(city){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=5b117267147ee27ab762fca637060b5f`,{mode: "cors"})
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        
        changeContent(data.name, data.sys.country, data.main.temp, data.main.feels_like, data.main.temp_max, data.main.temp_min, data.weather[0].description, dia, mes)
    })
    .catch(function (error){
        console.log(error)
    })
    
    
    
}       

const changeContent = (city, coun, tempe, feel_like, temp_max, temp_min, desc, dia, mes) => {
    const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months= ['January', 'February', 'March', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    cit.textContent=city;
    country.textContent=coun;
    temp.textContent=tempe;
    feelsLike.textContent=feel_like;
    tempMax.textContent = temp_max+'°';
    tempMin.textContent = temp_min+'°';
    description.textContent = desc;
    day.textContent = week[dia];
    month.textContent = months[mes];
    fineImg(desc)
    

}


mapClick(map)



export {fineCityCoords}