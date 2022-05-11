"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.goodbye = exports.calcAverage = exports.mySum = void 0;
const constants_1 = require("./constants");
const mySum = (desc, numbers) => {
    const result = [...numbers];
    console.log(`${desc}: `, result);
};
exports.mySum = mySum;
const calcAverage = () => {
    const total = constants_1.mySecondArr.reduce((prev, cur) => prev + cur);
    const average = total / constants_1.mySecondArr.length;
    console.log("average: ", average);
};
exports.calcAverage = calcAverage;
const goodbye = () => {
    setTimeout((() => { console.log("Goodbye"); }), 3000);
};
exports.goodbye = goodbye;
