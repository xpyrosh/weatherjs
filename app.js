// Init Weather
const weather = new Weather('Boston', 'Massachusetts');

// Event Listener for DOM Load
document.addEventListener('DOMContentLoaded', getWeather);


// Get Weather
function getWeather(){
    weather.getWeather()
    .then(result => {
        console.log(result);
    })
    .catch(err => console.log(err));
}