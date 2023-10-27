import getForecast from "./fetch";
import displayController from "./display";

const addEventListeners = () => {
  const displayCursor = displayController();

  const formSubmit = displayCursor.getFormSubmit();

  async function getResponse(cursor, query) {
    const response = await getForecast(query);
    console.log(response);

    const location = cursor.getResponseLocation();
    const date = cursor.getResponseDate();

    const conditionIcon = cursor.getResponseConditionIcon();
    const conditionText = cursor.getResponseConditionText();
    const temperature = cursor.getResponseTemperature();
    const feelsLike = cursor.getResponseFeelsLike();
    const wind = cursor.getResponseWind();

    const forecastConditionIcon = cursor.getResponseForecastedConditionIcon();
    const forecastConditionText = cursor.getResponseForecastedConditionText();
    const forecastMaxTemperature = cursor.getResponseForecastedMaxTemperature();
    const forecastMinTemperature = cursor.getResponseForecastedMinTemperature();
    const forecastWind = cursor.getResponseForecastedWind();

    location.textContent = `${response.cityName}, ${response.countryName}`;
    date.textContent = response.lastUpdated;

    conditionIcon.src = `https:${response.currentConditionIcon}`;
    conditionText.textContent = response.currentConditionText;
    // TODO: Implement imperial as alternative to metric
    temperature.textContent = response.currentTempC;
    feelsLike.textContent = response.feelsLikeC;
    wind.textContent = response.currentWindKph;

    forecastConditionIcon.src = `https:${response.tomorrowConditionIcon}`;
    forecastConditionText.textContent = response.tomorrowConditionText;
    // TODO: Implement imperial as alternative to metric
    forecastMaxTemperature.textContent = response.tomorrowMaxTempC;
    forecastMinTemperature.textContent = response.tomorrowMinTempC;
    forecastWind.textContent = response.tomorrowMaxWindKph;
  }

  formSubmit.addEventListener("click", () => {
    const cityNameInput = displayCursor.getCityNameInput();
    const areaCodeInput = displayCursor.getAreaCodeInput();
    const longitudeInput = displayCursor.getLongitudeInput();
    const latitudeInput = displayCursor.getLatitudeInput();

    const cityName = cityNameInput.value;
    const areaCode = areaCodeInput.value;
    const longitude = longitudeInput.value;
    const latitude = latitudeInput.value;

    let query;

    if (cityName) {
      query = cityName;
    } else if (areaCode) {
      query = areaCode;
    } else if (longitude && latitude) {
      query = `${longitude},${latitude}`;
    } else {
      query = "Toronto";
    }

    getResponse(displayCursor, query);

    displayCursor.renderMainResponse();
  });

  // Defaults temp
  const responseContainer = displayCursor.getMainResponseWrapper();
  responseContainer.style.background = "blue";

  const location = displayCursor.getResponseLocation();
  const date = displayCursor.getResponseDate();

  const conditionIcon = displayCursor.getResponseConditionIcon();
  const conditionText = displayCursor.getResponseConditionText();
  const temperature = displayCursor.getResponseTemperature();
  const feelsLike = displayCursor.getResponseFeelsLike();
  const wind = displayCursor.getResponseWind();

  const forecastConditionIcon = displayCursor.getResponseForecastedConditionIcon();
  const forecastConditionText = displayCursor.getResponseForecastedConditionText();
  const forecastMaxTemperature = displayCursor.getResponseForecastedMaxTemperature();
  const forecastMinTemperature = displayCursor.getResponseForecastedMinTemperature();
  const forecastWind = displayCursor.getResponseForecastedWind();

  location.textContent = "City, Country";
  date.textContent = "Some Date";

  conditionIcon.src = "https://cdn.weatherapi.com/weather/64x64/day/122.png";
  conditionText.textContent = "Default Conditions";

  // TODO: Implement imperial as alternative to metric
  temperature.textContent = "100C";
  feelsLike.textContent = "100C";
  wind.textContent = "100KPH";

  forecastConditionIcon.src = "https://cdn.weatherapi.com/weather/64x64/day/122.png";
  forecastConditionText.textContent = "Default Conditions";
  // TODO: Implement imperial as alternative to metric
  forecastMaxTemperature.textContent = "100C";
  forecastMinTemperature.textContent = "0C";
  forecastWind.textContent = "100KPH";
  // END OF TEMP DEFAULTS

  const main = displayCursor.build();
  document.body.append(main);
};

export default addEventListeners;
