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

  const main = displayCursor.build();
  document.body.append(main);
};

export default addEventListeners;
