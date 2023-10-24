import "./style.css";

const displayController = () => {

    // Initialize page elements
    const _main = (() => {
        const main = document.createElement("main");
        return main;
    })();

    const getMain = () => _main;

    const _mainContent = (() => {
        const mainContent = document.createElement("form");
        mainContent.classList.add("flex-col");
        return mainContent;
    })();
    
    const getMainContent = () => _mainContent;

    const _paramContainer = (() => {
        const container = document.createElement("div");
        container.classList.add("flex-col");
        return container;
    })();

    const getParamContainer = () =>_paramContainer;

    const _cityNameInput = (() => {
        const label = document.createElement("label");
        label.textContent = "City Name";
        label.setAttribute("for", "city");
        const param = document.createElement("input");
        param.type = "text";
        param.id = "city";
        const container = document.createElement("div");

        container.append(label, param);
        return container;
    })();

    const getCityNameInput = () => _cityNameInput;

    const _areaCodeInput = (() => {
        const label = document.createElement("label");
        label.textContent = "Area Code";
        label.setAttribute("for", "area");
        const param = document.createElement("input");
        param.type = "text";
        param.id = "area";
        const container = document.createElement("div");

        container.append(label, param);
        return container;
    })();

    const getAreaCodeInput = () => _areaCodeInput;

    const _coordinatesContainer = (() => {
        const container = document.createElement("div");
        container.classList.add("flex-row");
        return container;
    })();

    const getCoordinatesContainer = () => _coordinatesContainer;

    const _longitudeInput = (() => {
        const label = document.createElement("label");
        label.textContent = "Longitude";
        label.setAttribute("for", "lon");
        const param = document.createElement("input");
        param.type = "text";
        param.id = "lon";
        const container = document.createElement("div");

        container.append(label, param);
        return container;
    })();

    const getLongitudeInput = () => _longitudeInput;

    const _latitudeInput = (() => {
        const label = document.createElement("label");
        label.textContent = "Latitude";
        label.setAttribute("for", "lat")
        const param = document.createElement("input");
        param.type = "text";
        param.id = "lat";
        const container = document.createElement("div");

        container.append(label, param);
        return container;
    })();

    const getLatitudeInput = () => _latitudeInput;

    const _mainSubmitContainer = (() => {
        const container = document.createElement("div");
        return container;
    })();

    const getMainSubmitContainer = () => _mainSubmitContainer;

    const _mainSubmit = (() => {
        const button = document.createElement("button");
        return button;
    })();

    const getMainSubmit = () => _mainSubmit;

    // Order page elements
    const createMain = () => {

        _coordinatesContainer.append(_longitudeInput, _latitudeInput)
        _paramContainer.append(_cityNameInput, _areaCodeInput, _coordinatesContainer);
        _mainSubmitContainer.append(_mainSubmit);
        _mainContent.append(_paramContainer, _mainSubmitContainer);
        _main.append(_mainContent);
        
        return _main;
    }
    
    return {
        getMain,
        getMainContent,
        getParamContainer,
        getCityNameInput,
        getAreaCodeInput,
        getCoordinatesContainer,
        getLongitudeInput,
        getLatitudeInput,
        getMainSubmitContainer,
        getMainSubmit,
        createMain
    };
}

export default displayController;