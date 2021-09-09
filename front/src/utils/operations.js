import axios from 'axios';

// const apiUrl = "http://172.168.0.3:5000";
const apiUrl = "http://localhost:5000";

export function isNotNumber(input) {
  return input === '+' || input === '-' || input === '*' || input === '/';
}

export function isNumber(input) {
  return !isNotNumber(input);
}

export function isOperator(input) {
  return input === '+' || input === '-' || input === '*' || input === '/';
}

export async function getResult(finalFormula) {
  // console.log("FINAL FORMULA: ", finalFormula);
  let result = await axios.post(apiUrl + "/calc", { finalFormula });
  // console.log('OPERATIONS RESULT: ', result);
  return result;
}