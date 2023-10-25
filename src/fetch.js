const API_KEY = "adda6ef8fba24dea8d610815232410";

const FORECAST_QUERY_BASE =
  "https://api.weatherapi.com/v1/forecast.json?key=" + API_KEY;

async function getForecast(location) {
  const response = await fetch(FORECAST_QUERY_BASE + "&q=" + location + "&days=1", {
    mode: "cors",
  });
  const weatherData = await response.json();

  // Today's weather information
  const currentWeatherData = weatherData.current;
  const lastUpdated = currentWeatherData.last_updated;
  // Metric measurements
  const currentTempC = currentWeatherData.temp_c;
  const feelsLikeC = currentWeatherData.feelslike_c;
  const currentWindKph = currentWeatherData.wind_kph;
  // Imperial measurements
  const currentTempF = currentWeatherData.temp_f;
  const feelsLikeF = currentWeatherData.feelslike_f;
  const currentWindMph = currentWeatherData.wind_mph;
  // Today's conditions
  const isDay = !!currentWeatherData.is_day;
  const currentConditionText = currentWeatherData.condition.text;
  const currentConditionIcon = currentWeatherData.condition.icon;

  // Tomorrow's weather information
  const tomorrowWeatherData = weatherData.forecast.forecastday[0].day;
  // Metric measurements
  const tomorrowMaxTempC = tomorrowWeatherData.maxtemp_c;
  const tomorrowMinTempC = tomorrowWeatherData.mintemp_c;
  const tomorrowMaxWindKph = tomorrowWeatherData.maxwind_kph;
  // Imperial measurements
  const tomorrowMaxTempF = tomorrowWeatherData.maxtemp_f;
  const tomorrowMinTempF = tomorrowWeatherData.mintemp_f;
  const tomorrowMaxWindMph = tomorrowWeatherData.maxwind_mph;
  // Tomorrows's conditions
  const tomorrowConditionText = tomorrowWeatherData.condition.text;
  const tomorrowConditionIcon = tomorrowWeatherData.condition.icon;
  return {
    lastUpdated,
    currentTempC,
    feelsLikeC,
    currentWindKph,
    currentTempF,
    feelsLikeF,
    currentWindMph,
    isDay,
    currentConditionText,
    currentConditionIcon,
    tomorrowMaxTempC,
    tomorrowMinTempC,
    tomorrowMaxWindKph,
    tomorrowMaxTempF,
    tomorrowMinTempF,
    tomorrowMaxWindMph,
    tomorrowConditionText,
    tomorrowConditionIcon,
  };
}

export { getForecast };
