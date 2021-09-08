import { Post, Route, Body, Tags } from "tsoa";
import { finalResult } from "../services/operations";

interface CalcRequest {
  finalFormula: string[];
}

@Route("calc")
@Tags("Calc")
export default class CalcController {
  @Post("/")
  public async postResult(@Body() body: CalcRequest): Promise<any> {
    return finalResult(body.finalFormula);
  }
}