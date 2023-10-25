import { getForecast } from "./fetch";
import displayController from "./display";

const cursor = displayController();
const main = cursor.createMain();
document.body.append(main);


const london = await getForecast("london");
console.log(london.lastUpdated);
console.log(london.tomorrowMinTempC);
console.log(london.currentConditionText);
