import "./style.css";
import LoadingIcon from "./assets/gifs/loading.gif";

const displayController = () => {
  // Initialize page structure
  const _main = (() => {
    const main = document.createElement("main");
    main.classList.add("flex-row");
    return main;
  })();

  const getMain = () => _main;

  // Initialize form elements
const _mainFormWrapper = (() => {
  const container = document.createElement("div");
  container.classList.add("section-wrapper");
  return container;
})();

  const _mainForm = (() => {
    const container = document.createElement("form");
    container.classList.add("flex-col", "gap");
    return container;
  })();

  const getMainForm = () => _mainForm;

  const _formFieldset = (() => {
    const container = document.createElement("fieldset");
    container.classList.add("flex-col", "gap");

    const legend = document.createElement("legend");
    legend.textContent = "Search For The Weather";

    container.append(legend);
    return container;
  })();

  const getFormFieldset = () => _formFieldset;

  const _cityNameField = (() => {
    const label = document.createElement("label");
    label.textContent = "Place Name";
    label.classList.add("upper");
    label.setAttribute("for", "city");

    const param = document.createElement("input");
    param.type = "text";
    param.id = "city";

    const container = document.createElement("div");
    container.classList.add("input-field");
    container.append(label, param);
    return container;
  })();

  const getCityNameField = () => _cityNameField;
  const getCityNameInput = () => _cityNameField.lastChild;

  const _areaCodeField = (() => {
    const label = document.createElement("label");
    label.textContent = "Area Code";
    label.classList.add("upper");
    label.setAttribute("for", "area");

    const param = document.createElement("input");
    param.type = "text";
    param.id = "area";

    const container = document.createElement("div");
    container.classList.add("input-field");
    container.append(label, param);
    return container;
  })();

  const getAreaCodeField = () => _areaCodeField;
  const getAreaCodeInput = () => _areaCodeField.lastChild;

  const _coordinatesContainer = (() => {
    const container = document.createElement("div");
    container.classList.add("flex-row", "input-field");
    return container;
  })();

  const getCoordinatesContainer = () => _coordinatesContainer;

  const _longitudeField = (() => {
    const label = document.createElement("label");
    label.textContent = "Longitude";
    label.classList.add("upper");
    label.setAttribute("for", "lon");

    const param = document.createElement("input");
    param.type = "text";
    param.id = "lon";
    param.size = 8;
    param.pattern =
      "^(\\+|-)?(?:180(?:(?:\\.0{1,6})?)|(?:[0-9]|[1-9][0-9]|1[0-7][0-9])(?:(?:\\.[0-9]{1,6})?))$";

    const container = document.createElement("div");
    container.append(label, param);
    return container;
  })();

  const getLongitudeField = () => _longitudeField;
  const getLongitudeInput = () => _longitudeField.lastChild;

  const _latitudeField = (() => {
    const label = document.createElement("label");
    label.textContent = "Latitude";
    label.classList.add("upper");
    label.setAttribute("for", "lat");

    const param = document.createElement("input");
    param.type = "text";
    param.id = "lat";
    param.size = 8;
    param.pattern =
      "^(\\+|-)?(?:90(?:(?:\\.0{1,6})?)|(?:[0-9]|[1-8][0-9])(?:(?:\\.[0-9]{1,6})?))$";

    const container = document.createElement("div");
    container.append(label, param);
    return container;
  })();

  const getLatitudeField = () => _latitudeField;
  const getLatitudeInput = () => _latitudeField.lastChild;

  const _formSubmitContainer = (() => {
    const container = document.createElement("div");
    return container;
  })();

  const getFormSubmitContainer = () => _formSubmitContainer;

  const _formSubmit = (() => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = "Forecast";
    button.classList.add("upper");
    return button;
  })();

  const getFormSubmit = () => _formSubmit;

  // Order form elements
  const _createMainForm = () => {
    // Create elements for styling
    const makeDivider = (content, color) => {
      const divider = document.createElement("div");
      divider.textContent = content;
      divider.style.background = color;
      divider.classList.add("divider", "upper", "center", "small");
      return divider;
    };

    // Create DOM tree
    _coordinatesContainer.append(
      _longitudeField,
      makeDivider("and", "green"),
      _latitudeField,
    );

    _formFieldset.append(
      _cityNameField,
      makeDivider("or", "orange"),
      _areaCodeField,
      makeDivider("or", "orange"),
      _coordinatesContainer,
    );

    _formSubmitContainer.append(_formSubmit);
    _mainForm.append(_formFieldset, _formSubmitContainer);
    _mainFormWrapper.append(_mainForm);

    return _mainFormWrapper;
  };

  // Initialize response elements
  const _mainResponseLoadWrapper = (() => {
    const container = document.createElement("div");
    container.classList.add("hidden", "cover");
    return container;
  })();

  const getMainResponseLoadWrapper = () => _mainResponseLoadWrapper;

  const _mainResponseLoadIcon = (() => {
    const container = document.createElement("div");
    container.classList.add("absolute-center");

    const icon = document.createElement("img");
    icon.src = LoadingIcon;

    const ref = document.createElement("p");
    const refPreloader = document.createElement("a");
    const refSite = document.createElement("a");

    refPreloader.target = "_blank";
    refPreloader.href = "https://icons8.com/icon/c2nw5AE1yVav/spinner";
    refPreloader.textContent = "preloader";

    refSite.target = "_blank";
    refSite.href = "https://icons8.com";
    refSite.textContent = "Icons8";

    ref.append(
      refPreloader,
      " icon by ",
      refSite
      );

    container.append(
      icon,
      ref
    );

    container.style.textAlign = "center";
    return container;
  })();

  const getMainResponseLoadIcon = () => _mainResponseLoadIcon;

  const _mainResponseWrapper = (() => {
    const container = document.createElement("div");
    container.classList.add("section-wrapper");
    return container;
  })();

  const getMainResponseWrapper = () => _mainResponseWrapper;

  const _mainResponse = (() => {
    const container = document.createElement("div");
    container.classList.add("flex-col", "gap");
    return container;
  })();

  const getMainResponse = () => _mainResponse;

  const _responseHeaderContainer = (() => {
    const container = document.createElement("div");
    container.classList.add("flex-row", "gap", "response-field");
    return container;
  })();

  const getResponseHeaderContainer = () => _responseHeaderContainer;

  const _responseLocation = (() => {
    const container = document.createElement("h1");
    return container;
  })();

  const getResponseLocation = () => _responseLocation;

  const _responseDate = (() => {
    const container = document.createElement("h2");
    container.classList.add("center");
    return container;
  })();

  const getResponseDate = () => _responseDate;

  const _responseContentContainer = (() => {
    const container = document.createElement("div");
    container.classList.add("response-field", "current-weather");
    return container;
  })();

  const getResponseContentContainer = () => _responseContentContainer;

  const _responseSubcontentContainer = (() => {
    const container = document.createElement("div");
    container.classList.add("flex-col");
    return container;
  })();

  const getResponseSubcontentContainer = () => _responseSubcontentContainer;

  const _responseConditionIcon = (() => {
    const container = document.createElement("img");
    return container;
  })();

  const getResponseConditionIcon = () => _responseConditionIcon;

  const _responseConditionText = (() => {
    const container = document.createElement("div");
    return container;
  })();

  const getResponseConditionText = () => _responseConditionText;

  const _responseTemperature = (() => {
    const container = document.createElement("div");
    container.classList.add("large");
    return container;
  })();

  const getResponseTemperature = () => _responseTemperature;

  const _responseFeelsLike = (() => {
    const container = document.createElement("div");
    container.classList.add("feels-like");
    return container;
  })();

  const getResponseFeelsLike = () => _responseFeelsLike;

  const _responseWind = (() => {
    const container = document.createElement("div");
    return container;
  })();

  const getResponseWind = () => _responseWind;

  const _responseForecastContainer = (() => {
    const container = document.createElement("div");
    container.classList.add("response-field");
    return container;
  })();

  const getResponseForecastContainer = () => _responseForecastContainer;

  const _responseForecastedConditionIcon = (() => {
    const container = document.createElement("img");
    return container;
  })();

  const getResponseForecastedConditionIcon = () =>
    _responseForecastedConditionIcon;

  const _responseForecastedConditionText = (() => {
    const container = document.createElement("div");
    return container;
  })();

  const getResponseForecastedConditionText = () =>
    _responseForecastedConditionText;

  const _responseForecastedMaxTemperature = (() => {
    const container = document.createElement("div");
    return container;
  })();

  const getResponseForecastedMaxTemperature = () =>
    _responseForecastedMaxTemperature;

  const _responseForecastedMinTemperature = (() => {
    const container = document.createElement("div");
    return container;
  })();

  const getResponseForecastedMinTemperature = () =>
    _responseForecastedMinTemperature;

  const _responseForecastedWind = (() => {
    const container = document.createElement("div");
    return container;
  })();

  const getResponseForecastedWind = () => _responseForecastedWind;

  // Order response elements
  const renderMainResponse = () => {
    // Create DOM tree
    _responseHeaderContainer.replaceChildren(_responseLocation, _responseDate);

    _responseSubcontentContainer.replaceChildren(
      _responseConditionText,
      _responseFeelsLike,
      _responseWind,
    );

    _responseContentContainer.replaceChildren(
      _responseConditionIcon,
      _responseTemperature,
      _responseSubcontentContainer,
    );

    _responseForecastContainer.replaceChildren(
      _responseForecastedConditionIcon,
      _responseForecastedConditionText,
      _responseForecastedMaxTemperature,
      _responseForecastedMinTemperature,
      _responseForecastedWind,
    );

    _mainResponse.replaceChildren(
      _responseHeaderContainer,
      _responseContentContainer,
      _responseForecastContainer,
    );

    _mainResponseLoadWrapper.replaceChildren(
      _mainResponseLoadIcon
    );

    _mainResponseWrapper.replaceChildren(
      _mainResponseLoadWrapper,
      _mainResponse
    );

    return _mainResponseWrapper;
  };

  const build = () => {
    const form = _createMainForm();
    const response = renderMainResponse();

    _main.append(form, response);

    return _main;
  };

  return {
    getMain,
    getMainForm,
    getFormFieldset,
    getCityNameField,
    getCityNameInput,
    getAreaCodeField,
    getAreaCodeInput,
    getCoordinatesContainer,
    getLongitudeField,
    getLongitudeInput,
    getLatitudeField,
    getLatitudeInput,
    getFormSubmitContainer,
    getFormSubmit,
    getMainResponseLoadWrapper,
    getMainResponseLoadIcon,
    getMainResponseWrapper,
    getMainResponse,
    getResponseHeaderContainer,
    getResponseLocation,
    getResponseDate,
    getResponseContentContainer,
    getResponseSubcontentContainer,
    getResponseConditionIcon,
    getResponseConditionText,
    getResponseTemperature,
    getResponseFeelsLike,
    getResponseWind,
    getResponseForecastContainer,
    getResponseForecastedConditionIcon,
    getResponseForecastedConditionText,
    getResponseForecastedMaxTemperature,
    getResponseForecastedMinTemperature,
    getResponseForecastedWind,
    renderMainResponse,
    build,
  };
};

export default displayController;
