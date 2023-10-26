import displayController from "./display";
/* import addEventListeners from "./control"; */

import getForecast from "./fetch";

const addEventListeners = () => {

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

    const displayCursor = displayController();

    const formSubmit = displayCursor.getFormSubmit();

    formSubmit.addEventListener("click", () => {
    
        const cityNameField = displayCursor.getCityNameInput();
        const areaCodeField = displayCursor.getAreaCodeInput();
        const longitudeField = displayCursor.getLongitudeInput();
        const latitudeField = displayCursor.getLatitudeInput();
    
        const cityName = cityNameField.lastChild.value;
        const areaCode = areaCodeField.lastChild.value;
        const longitude = longitudeField.lastChild.value;
        const latitude = latitudeField.lastChild.value;
    
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

/* const cursor = displayController();
const main = cursor.build();
document.body.append(main); */
addEventListeners();
