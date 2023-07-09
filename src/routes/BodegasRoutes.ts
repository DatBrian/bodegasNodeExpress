import { Router, Request, Response } from "express";
import { Routes } from "../interfaces/RoutesInterface";

class BodegasRoutes implements Routes {
    public path = '/bodegas';
    public router = Router();

    constructor() {
        this.init();
    }

    public init() {
        this.router.get(`${this.path}`, (_re:Request, res:Response) => {
            res.status(200).json({ ok: true, message: "OK" });
        });
    }
}

export default BodegasRoutes;