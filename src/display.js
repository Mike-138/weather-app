import "./style.css";

const displayController = () => {

    // Initialize page elements
    const _main = (() => {
        const main = document.createElement("main");
        return main;
    })();

    const _mainContent = (() => {
        const mainContent = document.createElement("form");
        mainContent.id = "main-content";
        return mainContent;
    })();

    const _paramContainer = (() => {
        const container = document.createElement("div");
        return container;
    })();

    const _param1 = (() => {
        const label = document.createElement("label");
        const param = document.createElement("input");
        const container = document.createElement("div");

        container.append(label, param);
        return container;
    })();

    const _param2 = (() => {
        const label = document.createElement("label");
        const param = document.createElement("input");
        const container = document.createElement("div");

        container.append(label, param);
        return container;
    })();

    const _param3 = (() => {
        const label = document.createElement("label");
        const param = document.createElement("input");
        const container = document.createElement("div");

        container.append(label, param);
        return container;
    })();

    const _buttonContainer = (() => {
        const container = document.createElement("div");
        return container;
    })();

    const _button1 = (() => {
        const button = document.createElement("button");
        return button;
    })();

    const _button2 = (() => {
        const button = document.createElement("button");
        return button;
    })();

    const _button3 = (() => {
        const button = document.createElement("button");
        return button;
    })();

    // Order page elements
    const createMain = () => {

        _paramContainer.append(_param1, _param2, _param3);
        _buttonContainer.append(_button1, _button2, _button3);
        _mainContent.append(_paramContainer, _buttonContainer);
        _main.append(_mainContent);
        
        return _main;
    }
    
    return {
        createMain
    };
}

export default displayController;