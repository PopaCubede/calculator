import { ICalc } from "../interfaces/calc.interface";

class CalcService implements ICalc {

  resolveCalc(finalFormula: any) {
    let orderedCalc = this.orderCalc(finalFormula);
    console.log('--- orderedCalc : ', orderedCalc);
    return this.finalResolve(orderedCalc);
  }


  // async finalResult(finalFormula: string[]) => {
  //   const orderedFinalFormula: string[] = this.orderOperation(finalFormula);
  //   return this.resolve(orderedFinalFormula);
  // }

  isNotNumber(input: number | string) {
    console.log('2.1 --- isNotNumber : ', input);
    return input === '+' || input === '-' || input === '*' || input === '/';
  }

  isNumber(input: number | string) {
    console.log('2.0 --- isNumber : ', input);
    return !this.isNotNumber(input);
  }

  isOperator(input: number | string) {
    console.log('3.0 --- isOperator : ', input);
    return input === '+' || input === '-' || input === '*' || input === '/';
  }

  getPriority(input: number | string) {
    console.log('getPriority : ', input);
    if (input === '+' || input === '-') return 1;
    else if (input === '*' || input === '/') return 2;
    return 0;
  }

  orderCalc(resource: string[]) {
    let result: string[] = [], stack: any[] = [];

    console.log('1.0 --- RESOURCE: ', resource);

    resource.forEach(async (item: string) => {
      // let isNu = await this.isNumber(item);
      if (this.isNumber(item)) {
        console.log('2.2 --- IF isNumber: ', item);
        result.push(item);
      } else if (this.isOperator(item)) {
        console.log('3.1 --- IF ELSE item: ', item);
        while (stack.length > 0) {
          const peekedItem: any = stack[stack.length - 1];
          if (this.isOperator(peekedItem) && this.getPriority(peekedItem) >= this.getPriority(item)) {
            result.push(peekedItem);
            stack.pop();
          } else break;
        }
        stack.push(item);
      } else {
        console.log('4.0 --- ELSE item: ', item);
        console.log("There was an issue during the operation ordering.");
      }
    });

    while (stack.length > 0) {
      result.push(stack.pop());
    }

    console.log('5.0 --- RESULT: ', result);
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
        console.log('STACK.PUSH: ', stack);
      } else {
        console.log("There was an issue during the final calculation: something else than a number or operator was found.");
      }
    });

    console.log('FINAL STACK: ', stack);
    return Number.parseFloat(stack[0]);
  }
}

export default new CalcService();