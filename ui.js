class UI {
    constructor() {
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.details = document.getElementById('w-details');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.feelslike = document.getElementById('w-feelslike');
        this.pressure = document.getElementById('w-pressure');
        this.wind = document.getElementById('w-wind');
    }

    paint(weather) {
        this.location.textContent = weather.name;
        this.desc.textContent = weather.weather[0].description;
        this.string.textContent = `${weather.main.temp} F`;

        //openweather api uses icon to map to their icons
        const weatherIcon = `https://openweathermap.org/img/w/${weather.weather[0].icon}.png`;

        // https://openweathermap.org/img/w/04n.png
        this.icon.setAttribute('src', weatherIcon) 


        this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}`;
        this.feelslike.textContent = `Feels Like: ${weather.main.feels_like}`;
        this.pressure.textContent = `Pressure: ${weather.main.pressure}`;
        this.wind.textContent = `Wind Speed: ${weather.wind.speed}`;
        
    }
}