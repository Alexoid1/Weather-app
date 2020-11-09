const giphy = document.getElementById('giphy');

const fineImg = (weather) =>{
    let cli=weather.replace(' ', '-')
    fetch(`https://api.unsplash.com/search/photos?query=weather-${cli}&client_id=qO5N_GGS-NvGLQ9-5mQhX99at1FNPmBDCSZDmK6TOdk`,{mode: "cors"})
    .then(function(response) {
        return response.json();
    })
    .then(function(gif) {
        console.log(gif)
        let select=gif.results[Math.floor(Math.random() * gif.results.length)]
        changeBackground(select.urls.full)
       
    })
    .catch(function (error){
        console.log(error)
    })
}

function changeBackground(gif){
    giphy.style.background=`url(${gif})`
    giphy.style.backgroundSize='cover';
    giphy.style.backgroundRepeat= 'no-repeat'
}

export default fineImg