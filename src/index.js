import displayController from "./display";
import addEventListeners from "./control";

const cursor = displayController();
const main = cursor.build();
document.body.append(main);
addEventListeners();
