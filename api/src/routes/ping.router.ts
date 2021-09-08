import express, { Request, Response } from "express";
import PingController from "../controllers/ping.controller";

const router = express.Router();

router.get("/", async (_req: Request, res: Response) => {
  const controller: PingController = new PingController();
  const response = await controller.getMessage();
  return res.send(response);
});

router.post("/", async (req: Request, res: Response) => {
  const controller: PingController = new PingController();
  const response = await controller.postMessage(req.body);
  return res.send(response);
});

router.get("/:test", async (req: Request, res: Response) => {
  const controller: PingController = new PingController();
  const response = await controller.getParam(req.params.test);
  if (!response) res.status(404).send({ message: "No param found" })
  return res.send(response);
});

export = router