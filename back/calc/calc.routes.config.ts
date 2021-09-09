import { CommonRoutesConfig } from '../common/common.routes.config';
import CalcController from './controllers/calc.controller';
import express from 'express';

export class CalcRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, 'CalcRoutes');
  }

  configureRoutes() {
    this.app.route(`/calc`)
      .post((req: express.Request, res: express.Response) => {
        CalcController.resolveCalc(req.body).then((result) => {
          // res.status(result.error).send({ message: result.message });
          res.send({ message: result.message });
        });
      });

    return this.app;
  }
}