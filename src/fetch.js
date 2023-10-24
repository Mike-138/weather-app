const API_KEY = "adda6ef8fba24dea8d610815232410";

const CURRENT_WEATHER_QUERY_BASE = "https://api.weatherapi.com/v1/current.json?key=" + API_KEY

const FORECAST_QUERY_BASE = "https://api.weatherapi.com/v1/forecast.json?key=" + API_KEY

async function getCurrentWeather(location) {
    const response = await fetch(CURRENT_WEATHER_QUERY_BASE + "&q=" + location, {mode: "cors"});
    const currentWeatherData = await response.json();
    return currentWeatherData;
}

async function getForecast(location) {
    const response = await fetch(FORECAST_QUERY_BASE + "&q=" + location, {mode: "cors"});
    const currentWeatherData = await response.json();
    return currentWeatherData;
}

export { getCurrentWeather, getForecast };