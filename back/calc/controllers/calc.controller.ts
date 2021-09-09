import express from 'express';
import calcService from '../services/calc.service';

class CalcController {

  async resolveCalc(req: express.Request, res: express.Response) {
    console.log("BODY: ", req.body);
    const finalResult = await calcService.resolveCalc(req.body.finalFormula);
    res.status(200).send({ message: finalResult });
  }
}

export default new CalcController();