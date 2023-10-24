import { getCurrentWeather, getForecast } from "./fetch";
import displayController from "./display";

const cursor = displayController();
const main = cursor.createMain();
document.body.append(main);

console.log(getCurrentWeather("london"));
console.log(getForecast("london"));