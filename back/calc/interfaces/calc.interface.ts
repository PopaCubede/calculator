export interface ICalc {
  resolveCalc: (finalFormula: string[]) => Promise<any>,
}