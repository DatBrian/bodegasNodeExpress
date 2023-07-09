import { Router } from "express";
import { Routes } from "../interfaces/RoutesInterface";
import BodegasController, { bodegasController } from "../controllers/BodegasController";

class BodegasRoutes implements Routes {
    public path: string;
    public router: Router;
    public controller: BodegasController;

    constructor() {
        this.path = '/bodegas';
        this.router = Router();
        this.controller = bodegasController
        this.initRoutes();
    }

    private initRoutes() {
        this.router.get(`${this.path}`, this.controller.getBodegas)
    }
}

export default BodegasRoutes;
export const bodeagasRoutes = new BodegasRoutes();