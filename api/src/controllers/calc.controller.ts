import { Post, Route, Body, Tags } from "tsoa";
import { finalResult } from "../services/operations";

@Route("calc")
@Tags("Calc")
export default class CalcController {
  @Post("/")
  public async postResult(@Body() body: any[]): Promise<any> {
    return finalResult(body);
  }
}