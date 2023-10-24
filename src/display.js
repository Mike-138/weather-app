import "./style.css";

const displayController = () => {

    const createMain = () => {
        
        const main = document.createElement("main");

        const container = document.createElement("div");
        container.id = "main-content";

        main.append(container);
        
        return main;
    }
    
    return {
        createMain
    };
}

export default displayController;