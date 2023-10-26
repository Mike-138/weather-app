import getForecast from "./fetch";
import displayController from "./display";

const addEventListeners = () => {

    async function getResponse(cursor, query) {

        console.log("TRIGGERED");
        const response = await getForecast(query);
    
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
    
        conditionIcon.src = response.currentConditionIcon;
        conditionText.textContent = response.currentConditionText;
        // TODO: Implement imperial as alternative to metric
        temperature.textContent = response.currentTempC;
        feelsLike.textContent = response.feelsLikeC;
        wind.textContent = response.currentWindKph;
    
        forecastConditionIcon.src = response.forecastConditionIcon;
        forecastConditionText.textContent = response.forecastConditionText;
        // TODO: Implement imperial as alternative to metric
        forecastMaxTemperature.textContent = response.forecastMaxTemperature;
        forecastMinTemperature.textContent = response.forecastMinTemperature;
        forecastWind.textContent = response.forecastWind;
    
    }

    const displayCursor = displayController();

    const formSubmit = displayCursor.getFormSubmit();
    console.log(formSubmit);

    formSubmit.addEventListener("click", () => {
    
        console.log("hi");
        const cityNameElement = displayCursor.getCityNameInput();
        const areaCodeElement = displayCursor.getAreaCodeInput();
        const longitudeElement = displayCursor.getLongitudeInput();
        const latitudeElement = displayCursor.getLatitudeInput();
    
        const cityName = cityNameElement.value;
        const areaCode = areaCodeElement.value;
        const longitude = longitudeElement.value;
        const latitude = latitudeElement.value;
    
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

};

export default addEventListeners;