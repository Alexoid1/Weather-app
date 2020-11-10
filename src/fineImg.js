const giphy = document.getElementById('giphy');

const changeBackground = (gif) => {
  giphy.style.background = `url(${gif})`;
  giphy.style.backgroundSize = 'cover';
  giphy.style.backgroundRepeat = 'no-repeat';
};

const fineImg = async (weather) => {
  const cli = weather.replace(' ', '-');
  await fetch(`https://api.unsplash.com/search/photos?query=weather-${cli}&client_id=qO5N_GGS-NvGLQ9-5mQhX99at1FNPmBDCSZDmK6TOdk`, { mode: 'cors' })
    .then((response) => response.json())
    .then((gif) => {
      console.log(gif);
      const select = gif.results[Math.floor(Math.random() * gif.results.length)];
      changeBackground(select.urls.full);
    });
    
};


export default fineImg;