import { mySum } from "./functions";
import { myArr } from "./constants";
import { mySecondArr } from "./constants"
import { calcAverage } from "./functions"
import { goodbye } from "./functions"
import { Person } from "./constants"

mySum("myArr", myArr);
mySum("mySecondArr", mySecondArr);
calcAverage();
goodbye();
console.log("Person: ", Person);
