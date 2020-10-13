// Init Weather
const weather = new Weather('Boston', 'Massachusetts');

// Init UI
const ui = new UI();

// Event Listener for DOM Load
document.addEventListener('DOMContentLoaded', getWeather);

// Change Location Event
document.getElementById('w-change-btn').addEventListener('click', (e)=> {
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;

    // Change the location
    weather.changeLocation(city, state);

    // Get Weather Again
    getWeather();

    // Close Modal - NEEDS JQUERY
    $('#locModal').modal('hide');
});


// Get Weather
function getWeather(){
    weather.getWeather()
    .then(result => {
        ui.paint(result);
    })
    .catch(err => console.log(err));
}