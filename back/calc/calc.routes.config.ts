import { CommonRoutesConfig } from '../common/common.routes.config';
import CalcController from './controllers/calc.controller';
import express from 'express';

export class CalcRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, 'CalcRoutes');
  }

  configureRoutes() {
    this.app.route(`/calc`)
      // .get(CalcController.resolveCalc)
      .post((req: express.Request, res: express.Response) => {
        CalcController.resolveCalc(req, res);
      });

    return this.app;
  }
}