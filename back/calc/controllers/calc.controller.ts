import express from 'express';
import { Post, Route, Body, Tags } from "tsoa";
import calcService from '../services/calc.service';

interface CalcRequest {
  finalFormula: string[];
}
interface CalcResponse {
  message: number,
  // error: number
}

@Route("calc")
@Tags("Calc")
class CalcController {

  @Post("/")
  async resolveCalc(@Body() body: CalcRequest): Promise<CalcResponse> {
    // console.log("BODY: ", req.body);
    const finalResult = await calcService.resolveCalc(body.finalFormula);
    // res.status(200).send({ message: finalResult });
    let errorRes = 500;
    if (finalResult !== null) {
      errorRes = 200
    };
    // return { message: finalResult, error: errorRes }
    return { message: finalResult }
  }
}

export default new CalcController();