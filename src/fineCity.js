import { changeContent } from './index';

const tiempo = new Date();
const dia = tiempo.getDay();
const mes = tiempo.getMonth();

const fineCity = async (city, value) => {
  await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${value}&appid=5b117267147ee27ab762fca637060b5f`, { mode: 'cors' })
    .then((response) => response.json())
    .then((data) => {
      changeContent(data.name,
        data.sys.country,
        data.main.temp,
        data.main.feels_like,
        data.main.temp_max,
        data.main.temp_min,
        data.weather[0].description,
        dia,
        mes);
    });
    
};

export default fineCity;