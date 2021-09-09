import { ICalc } from "../interfaces/calc.interface";

class CalcService implements ICalc {

  resolveCalc(finalFormula: string[]) {
    let orderedCalc = this.orderCalc(finalFormula);
    return this.finalResolve(orderedCalc);
  }

  isNotNumber(input: number | string) {
    return input === '+' || input === '-' || input === '*' || input === '/';
  }

  isNumber(input: number | string) {
    return !this.isNotNumber(input);
  }

  isOperator(input: number | string) {
    return input === '+' || input === '-' || input === '*' || input === '/';
  }

  getPriority(input: number | string) {
    if (input === '+' || input === '-') return 1;
    else if (input === '*' || input === '/') return 2;
    return 0;
  }

  orderCalc(resource: string[]) {
    let result: string[] = [], stack: any[] = [];

    resource.forEach(async (item: string) => {
      if (this.isNumber(item)) {
        result.push(item);
      } else if (this.isOperator(item)) {
        while (stack.length > 0) {
          const peekedItem: any = stack[stack.length - 1];
          if (this.isOperator(peekedItem) && this.getPriority(peekedItem) >= this.getPriority(item)) {
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

    // console.log('--- ORDERED RESULT: ', result);
    return result;
  }

  async finalResolve(orderedFinalFormula: string[]) {
    let stack: any[] = [];

    orderedFinalFormula.forEach(async (item: string) => {
      if (this.isNumber(item)) {
        stack.push(item);
      } else if (this.isOperator(item)) {
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

    // console.log('--- FINAL STACK: ', stack);
    return Number.parseFloat(stack[0]);
  }
}

export default new CalcService();