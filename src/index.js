fetch('https://api.openweathermap.org/data/2.5/weather?q=quito&appid=5b117267147ee27ab762fca637060b5f',{mode: "cors"})
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data)})
    .catch(function (error){
        console.log(error)
    })   