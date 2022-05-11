import { mySecondArr } from "./constants";

export const mySum = (desc: string, numbers: number[]) => {
  const result = [...numbers];
  console.log(`${desc}: `, result);
}

export const calcAverage = () => {
  const total = mySecondArr.reduce((prev, cur) => prev + cur);
  const average = total / mySecondArr.length;
  console.log("average: ", average);
}

export const goodbye = () => {
  setTimeout(
    (() => { console.log("Goodbye")} ),
    3000
  )
}