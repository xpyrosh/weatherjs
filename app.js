// Init Weather
const weather = new Weather('Boston', 'Massachusetts');

// Init UI
const ui = new UI();

// Event Listener for DOM Load
document.addEventListener('DOMContentLoaded', getWeather);


// Get Weather
function getWeather(){
    weather.getWeather()
    .then(result => {
        ui.paint(result);
    })
    .catch(err => console.log(err));
}