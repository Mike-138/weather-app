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

  const _mainFieldset = (() => {
    const container = document.createElement("fieldset");
    container.classList.add("flex-col");

    const legend = document.createElement("legend");
    legend.textContent = "Search For The Weather";

    container.append(legend);
    return container;
  })();

  const getMainFieldset = () => _mainFieldset;

  const _cityNameInput = (() => {
    const label = document.createElement("label");
    label.textContent = "City Name";
    label.classList.add("upper");
    label.setAttribute("for", "city");

    const param = document.createElement("input");
    param.type = "text";
    param.id = "city";

    const container = document.createElement("div");
    container.classList.add("field");
    container.append(label, param);
    return container;
  })();

  const getCityNameInput = () => _cityNameInput;

  const _areaCodeInput = (() => {
    const label = document.createElement("label");
    label.textContent = "Area Code";
    label.classList.add("upper");
    label.setAttribute("for", "area");

    const param = document.createElement("input");
    param.type = "text";
    param.id = "area";

    const container = document.createElement("div");
    container.classList.add("field");
    container.append(label, param);
    return container;
  })();

  const getAreaCodeInput = () => _areaCodeInput;

  const _coordinatesContainer = (() => {
    const container = document.createElement("div");
    container.classList.add("flex-row", "field");
    return container;
  })();

  const getCoordinatesContainer = () => _coordinatesContainer;

  const _longitudeInput = (() => {
    const label = document.createElement("label");
    label.textContent = "Longitude";
    label.classList.add("upper");
    label.setAttribute("for", "lon");

    const param = document.createElement("input");
    param.type = "text";
    param.id = "lon";
    param.pattern =
      "^(\\+|-)?(?:180(?:(?:\\.0{1,6})?)|(?:[0-9]|[1-9][0-9]|1[0-7][0-9])(?:(?:\\.[0-9]{1,6})?))$";

    const container = document.createElement("div");
    container.append(label, param);
    return container;
  })();

  const getLongitudeInput = () => _longitudeInput;

  const _latitudeInput = (() => {
    const label = document.createElement("label");
    label.textContent = "Latitude";
    label.classList.add("upper");
    label.setAttribute("for", "lat");

    const param = document.createElement("input");
    param.type = "text";
    param.id = "lat";
    param.pattern =
      "^(\\+|-)?(?:90(?:(?:\\.0{1,6})?)|(?:[0-9]|[1-8][0-9])(?:(?:\\.[0-9]{1,6})?))$";

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
    button.textContent = "Forecast";
    button.classList.add("upper");
    return button;
  })();

  const getMainSubmit = () => _mainSubmit;

  // Order page elements
  const createMain = () => {

    // Create elements for styling
    const makeDivider = (content) => {
        const divider = document.createElement("div");
        divider.textContent = content;
        divider.classList.add("upper", "center", "small");
        return divider;
    }

    // Create DOM tree
    _coordinatesContainer.append(
        _longitudeInput,
        makeDivider("and"),
        _latitudeInput
    );

    _mainFieldset.append(
      _cityNameInput,
      makeDivider("or"),
      _areaCodeInput,
      makeDivider("or"),
      _coordinatesContainer,
    );

    _mainSubmitContainer.append(_mainSubmit);
    _mainContent.append(_mainFieldset, _mainSubmitContainer);
    _main.append(_mainContent);

    return _main;
  };

  return {
    getMain,
    getMainContent,
    getMainFieldset,
    getCityNameInput,
    getAreaCodeInput,
    getCoordinatesContainer,
    getLongitudeInput,
    getLatitudeInput,
    getMainSubmitContainer,
    getMainSubmit,
    createMain,
  };
};

export default displayController;
