import express, { Request, Response } from "express";
import CalcController from "../controllers/calc.controller";

const router = express.Router();

router.post("/calc", async (req: Request, res: Response) => {
  const controller: CalcController = new CalcController();
  const response = await controller.postResult(req.body);
  return res.send(response);
});

export default router;