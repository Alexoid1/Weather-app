import {changeContent} from './index';



const tiempo = new Date();
const dia = tiempo.getDay();
const mes = tiempo.getMonth();

function fineCityCoords(log,lat,value){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&units=${value}&appid=5b117267147ee27ab762fca637060b5f`,{mode: "cors"})
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

export default fineCityCoords