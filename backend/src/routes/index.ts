import { Router } from "express";
import gpsRouter from './gps';

const router = Router();

router.use('/gps', gpsRouter);

export default router;