import express from "express";
import CalcController from "../controllers/calc.controller";

const router = express.Router();

router.post("/", async (req, res) => {
  const controller = new CalcController();
  const response = await controller.postResult(req.body);
  return res.send(response);
});

export default router;