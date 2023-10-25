import "./style.css";

const displayController = () => {
  // Initialize page structure
  const _main = (() => {
    const main = document.createElement("main");
    main.classList.add("flex-col");
    return main;
  })();

  const getMain = () => _main;

  // Initialize form elements
  const _mainForm = (() => {
    const container = document.createElement("form");
    container.classList.add("flex-col");
    return container;
  })();

  const getMainForm = () => _mainForm;

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

  // Order form elements
  const createMainForm = () => {

    // Create elements for styling
    const makeDivider = (content, color) => {
        const divider = document.createElement("div");
        divider.textContent = content;
        divider.style.background = color;
        divider.classList.add("divider", "upper", "center", "small");
        return divider;
    }

    // Create DOM tree
    _coordinatesContainer.append(
        _longitudeInput,
        makeDivider("and", "green"),
        _latitudeInput
    );

    _mainFieldset.append(
      _cityNameInput,
      makeDivider("or", "orange"),
      _areaCodeInput,
      makeDivider("or", "orange"),
      _coordinatesContainer,
    );

    _mainSubmitContainer.append(_mainSubmit);
    _mainForm.append(_mainFieldset, _mainSubmitContainer);
    _main.append(_mainForm);

    return _main;
  };

  return {
    getMain,
    getMainForm,
    getMainFieldset,
    getCityNameInput,
    getAreaCodeInput,
    getCoordinatesContainer,
    getLongitudeInput,
    getLatitudeInput,
    getMainSubmitContainer,
    getMainSubmit,
    createMainForm,
  };
};

export default displayController;
