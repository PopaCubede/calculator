export interface ICalcResponse {
  message: number;
}

// interface CalcRequest {
//   finalFormula: string[];
// }

export const finalResult = async (finalFormula: string[]): Promise<ICalcResponse> => {
  const orderedFinalFormula: string[] = orderOperation(finalFormula);
  return resolve(orderedFinalFormula);
};

export function isNotNumber(input: any) {
  return input === '+' || input === '-' || input === '*' || input === '/';
}

export function isNumber(input: any) {
  return !isNotNumber(input);
}

export function isOperator(input: any) {
  return input === '+' || input === '-' || input === '*' || input === '/';
}

function getPriority(input: any) {
  if (input === '+' || input === '-') return 1;
  else if (input === '*' || input === '/') return 2;
  return 0;
}

function orderOperation(finalFormula: string[]) {
  let result: string[] = [], stack: any[] = [];

  finalFormula.forEach(item => {
    if (isNumber(item)) {
      result.push(item);
    } else if (isOperator(item)) {
      while (stack.length > 0) {
        const peekedItem: any = stack[stack.length - 1];
        if (isOperator(peekedItem) && getPriority(peekedItem) >= getPriority(item)) {
          result.push(peekedItem);
          stack.pop();
        } else break;
      }
      stack.push(item);
    } else {
      console.log("There was an issue during the operation ordering.");
    }
  });

  while (stack.length > 0) {
    result.push(stack.pop());
  }

  return result;
}

function resolve(orderedFinalFormula: string[]): ICalcResponse {
  let stack: any[] = [];

  orderedFinalFormula.forEach(item => {
    if (isNumber(item)) {
      stack.push(item);
    } else if (isOperator(item)) {
      const num1 = Number.parseFloat(stack.pop()), num2 = Number.parseFloat(stack.pop());
      let result: number = 0;

      switch (item) {
        case '+':
          result = num2 + num1;
          break;
        case '-':
          result = num2 - num1;
          break;
        case '*':
          result = num2 * num1;
          break;
        case '/':
          result = num2 / num1;
          break;
        default:
          console.log('There was an issue during the final calculation: default was hit.');
      }

      stack.push(result + '');
    } else {
      console.log("There was an issue during the final calculation: something else than a number or operator was found.");
    }
  });

  let finalResult: ICalcResponse = {
    message: Number.parseFloat(stack[0])
  };

  return finalResult;
}