import { Router } from "express";
import { gpsController } from "../controllers";

const gpsRouter = Router();

gpsRouter.post("/distance", gpsController.getGpsDistance);

export default gpsRouter;