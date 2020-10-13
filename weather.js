class Weather {
    constructor(city, state){
        this.apiKey = 'd6c474f6d44ee2a6455dc2961998f262';
        this.city = city;
        this.state = state;
    }

    // Fetch weather from API
    // https://openweathermap.org/
    async getWeather() {
        const response = await fetch(`api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&appid=${this.apiKey}`);

        const responseData = await response.json();
        return responseData;
    }

    // Change weather location
    changeLocation(city, state){
        this.city = city;
        this.state = state;
    }
}