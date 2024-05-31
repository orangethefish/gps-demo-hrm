import { NextFunction, Request, Response } from "express";
import { gpsService } from "../services";

export async function getGpsDistance(req: Request, res: Response, next: NextFunction) {
    try{
        const result = await gpsService.getGpsDistance(req.body);
        res.status(200).json(result);
    }catch(err){
        next(err);
    }
}